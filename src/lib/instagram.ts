import ChatGPTIcon from "../components/ChatGPTIcon";

import { CHATGPT_BTN_ID, Domains, ERROR_MESSAGE } from "../utils/constants";
import {
  getComment,
  delay,
  imitateKeyInput,
  showAPIKeyError,
} from "../utils/shared";
import getConfig from "../utils/config";
import { notyf } from "../chrome/content_script";

type PostType = "FEED" | "REELS";

export const injector = () => {
  const isFromFeed = !window.location.pathname.includes("reels/videos/");
  document
    .querySelectorAll(
      isFromFeed
        ? `article[role="presentation"] form[method="POST"]`
        : `div[role="dialog"] form[method="POST"]`
    )
    .forEach((el) => {
      if (el.getAttribute("hasChatGPT") === "true") return;
      el.setAttribute("hasChatGPT", "true");

      const icon = el?.querySelector("svg");
      const iconColor = window.getComputedStyle(icon!)?.color || "#8e8e8e";

      if (isFromFeed) {
        const chatGPTBtn = createChatGPTBtn(
          "instafeed-chatgpt-btn",
          iconColor,
          "FEED"
        );
        const emoji = el.querySelector(
          "div:first-of-type button:first-of-type"
        );
        emoji?.parentElement?.setAttribute("force-flex", "true");
        insertAfter(emoji!, chatGPTBtn);
      } else {
        const chatGPTBtn = createChatGPTBtn(
          "instareels-chatgpt-btn",
          iconColor,
          "REELS"
        );
        const emojiWrapper = el.querySelector(
          "div:first-of-type > div:first-of-type"
        );
        emojiWrapper?.classList.add("insta-with-chatgpt");
        emojiWrapper?.prepend(chatGPTBtn);
      }
    });
};

export const handler = async () => {
  const handleClick = async (e: MouseEvent) => {
    {
      const target = e.target as Element;
      const btn = target?.closest(`#${CHATGPT_BTN_ID}`);
      if (!btn) return;

      const config = await getConfig();
      if (!config?.["social-comments-openapi-key"])
        return showAPIKeyError(Domains.Twitter);

      notyf?.dismissAll();

      const isFromFeed = !window.location.pathname.includes("reels");
      const wrapper = target?.closest(
        isFromFeed ? "article" : `div[role="dialog"]`
      );
      if (!wrapper) return;

      const commentInputEl = wrapper.querySelector(
        `form[method="POST"] textarea`
      ) as HTMLTextAreaElement;

      if (commentInputEl.value) {
        imitateKeyInput(commentInputEl, "");
        handleClick(e);
        return;
      }

      imitateKeyInput(commentInputEl, "");

      commentInputEl.setAttribute("placeholder", "ChatGPT is thinking...");
      commentInputEl.setAttribute("disabled", "true");

      btn.setAttribute("disabled", "true");
      btn.setAttribute("loading", "true");

      wrapper.querySelectorAll("div");

      let body = "";
      if (isFromFeed) {
        body = await getFeedContent(wrapper);
      } else {
        body = await getReelContent();
      }

      const comment = await getComment(config, Domains.Instagram, body);
      if (comment.length) {
        imitateKeyInput(commentInputEl, comment);
      } else {
        commentInputEl.setAttribute("placeholder", ERROR_MESSAGE);
        await delay(3000);
      }

      commentInputEl.setAttribute("placeholder", "Add a comment..");
      commentInputEl.removeAttribute("disabled");

      btn.removeAttribute("disabled");
      btn.removeAttribute("loading");
    }
  };
  document.body.addEventListener("click", handleClick);
};

const getInstagramContent = async (postId: string) => {
  const resp = await fetch(`https://www.instagram.com/p/${postId}`);
  if (!resp.ok) return "";

  const instagramResp = await resp.text();

  let content = decodeEntities(
    [
      ...instagramResp?.matchAll(
        /<meta[^>]+property="og:title"[^>]+content="([^"]+)" \/>/g
      ),
    ]?.[0]?.[1] || ""
  );

  content =
    [...content.matchAll(/[^>]+ on Instagram: "([^>]+)"/g)]?.[0]?.[1] || "";

  return content;
};

const getFeedContent = async (wrapper: Element): Promise<string> => {
  const linksMatches = [...wrapper.innerHTML.matchAll(/href="\/p\/(.*?)\/"/g)];
  const postId =
    linksMatches.filter((link) => !link?.[1]?.includes("liked_by"))?.[0]?.[1] ||
    "";

  return getInstagramContent(postId);
};

const getReelContent = async (): Promise<string> => {
  const pathName = window.location.pathname;
  const postId =
    [...pathName?.matchAll(/reels\/videos\/(.*)\//g)]?.[0]?.[1] || "";

  return getInstagramContent(postId);
};

const decodeEntities = (str: string): string => {
  const txt = document.createElement("textarea");
  txt.innerHTML = str;

  return txt.value;
};

const insertAfter = (referenceNode: Element, newNode: Element) => {
  referenceNode?.parentNode?.insertBefore(newNode, referenceNode.nextSibling);
};

const createChatGPTBtn = (
  className: string,
  color: string,
  postType: PostType
) => {
  const chatGPTBtn = document.createElement("div");
  chatGPTBtn.setAttribute("class", className);
  chatGPTBtn.setAttribute("post-type", postType);
  chatGPTBtn.innerHTML = ChatGPTIcon(22, color, CHATGPT_BTN_ID);

  return chatGPTBtn;
};

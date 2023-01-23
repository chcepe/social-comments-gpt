import ChatGPTIcon from "../components/ChatGPTIcon";
import { CHATGPT_BTN_ID, INSTAGRAM_PROMPTS } from "./constants";
import { reelsContentBodyParser } from "./parser";
import { getComment, delay, getOpenAIKey } from "./shared";

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

      if (isFromFeed) {
        const chatGPTBtn = createChatGPTBtn(
          "instafeed-chatgpt-btn",
          "#262626",
          "FEED"
        );
        const emoji = el.querySelector("div:first-of-type");
        insertAfter(emoji!, chatGPTBtn);
      } else {
        const chatGPTBtn = createChatGPTBtn(
          "instareels-chatgpt-btn",
          "#8e8e8e",
          "REELS"
        );
        const emojiWrapper = el.querySelector("div:first-of-type");
        emojiWrapper?.classList.add("insta-with-chatgpt");
        emojiWrapper?.prepend(chatGPTBtn);
      }
    });
};

export const handler = async () => {
  document.body.addEventListener("click", async (e) => {
    const target = e.target as Element;
    const btn = target?.closest(`#${CHATGPT_BTN_ID}`);
    if (!btn) return;

    const openAIKey = await getOpenAIKey();
    if (!openAIKey) return alert("Please set OpenAI key.");

    const isFromFeed = !window.location.pathname.includes("reels");
    const wrapper = target?.closest(
      isFromFeed ? "article" : `div[role="dialog"]`
    );
    if (!wrapper) return;

    const commentInputEl = wrapper.querySelector("textarea")!;
    imitateKeyInput(commentInputEl, "");

    commentInputEl.setAttribute("placeholder", "ChatGPT is thinking...");
    commentInputEl.setAttribute("disabled", "true");

    btn.setAttribute("disabled", "true");
    btn.setAttribute("loading", "true");

    wrapper.querySelectorAll("div");

    let body = "";

    if (isFromFeed) {
      for (const spanEl of wrapper.querySelectorAll("span")) {
        if (
          spanEl.parentElement?.previousElementSibling?.innerHTML ===
            "&nbsp;" ||
          spanEl?.parentElement?.previousElementSibling?.tagName === "H2"
        ) {
          const hasMore =
            spanEl?.parentElement?.innerHTML?.includes(`role="button"`);
          if (hasMore) {
            (
              spanEl?.parentElement?.querySelector(
                `div[role="button"]`
              ) as HTMLButtonElement
            )?.click();
            await delay(1000);
          }

          body = spanEl?.textContent || "";
          break;
        }
      }
    } else {
      for (const el of Array.from([
        ...document.querySelectorAll(
          `div[aria-disabled="false"][role="button"] > div > div > span:first-of-type`
        ),
      ]).reverse()) {
        if (isInViewport(el)) {
          const parent =
            el.parentElement?.parentElement?.parentElement?.parentElement;
          const moreBtn = el.nextElementSibling;
          if (moreBtn?.textContent?.includes("more")) {
            (moreBtn as HTMLButtonElement)?.click();
          }

          await delay(2000);

          body = reelsContentBodyParser(parent?.innerText || "");

          break;
        }
      }
    }

    const comment = await getComment(openAIKey, INSTAGRAM_PROMPTS, body);
    if (comment.length) {
      imitateKeyInput(commentInputEl, comment);
    } else {
      commentInputEl.setAttribute(
        "placeholder",
        "ChatGPT failed. Maybe update key and try again."
      );
      await delay(3000);
    }

    commentInputEl.setAttribute("placeholder", "Add a comment..");
    commentInputEl.removeAttribute("disabled");

    btn.removeAttribute("disabled");
    btn.removeAttribute("loading");
  });
};

const imitateKeyInput = (el: HTMLTextAreaElement, keyChar: string) => {
  const keyboardEventInit = {
    bubbles: false,
    cancelable: false,
    composed: false,
    key: "",
    code: "",
    location: 0,
  };
  el.dispatchEvent(new KeyboardEvent("keydown", keyboardEventInit));
  el.value = keyChar;
  el.dispatchEvent(new KeyboardEvent("keyup", keyboardEventInit));
  el.dispatchEvent(new Event("change", { bubbles: true }));
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

const isInViewport = (el: Element) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

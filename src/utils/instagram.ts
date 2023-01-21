import ChatGPTIcon from "../components/ChatGPTIcon";
import { CHATGPT_BTN_ID } from "./constants";

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

export const handler = () => {
  document.body.addEventListener("click", async (e) => {
    const target = e.target as Element;
    const btn = target?.closest(`#${CHATGPT_BTN_ID}`);
    if (!btn) return;

    const isFromFeed = !window.location.pathname.includes("reels");
    const wrapper = target?.closest(
      isFromFeed ? "article" : `div[role="dialog"]`
    );
    if (!wrapper) return;

    const commentInputEl = wrapper.querySelector("textarea")!;
    commentInputEl.value = "";

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
      console.log(
        document.querySelectorAll(
          `div[style="height: 16px; width: 100%;"]`
        )?.[1]?.previousElementSibling
      );
    }

    console.log(body);

    //   todo: get content of post + expand "more"

    commentInputEl.setAttribute("placeholder", "Add a comment..");
    //   btn.removeAttribute("disabled");
    //   btn.removeAttribute("loading");
  });
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

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

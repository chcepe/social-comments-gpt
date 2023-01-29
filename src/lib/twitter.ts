import ChatGPTIcon from "../components/ChatGPTIcon";

import { CHATGPT_BTN_ID, Domains } from "../utils/constants";
import { getComment, delay, closestSibling } from "../utils/shared";
import getConfig from "../utils/config";

export const injector = () => {
  document
    .querySelectorAll(`[aria-label="Add photos or video"]`)
    .forEach((el) => {
      const pathname = window.location.pathname;
      if (pathname === "/" || pathname === "/home") return;

      if (el.getAttribute("hasChatGPT") === "true") return;
      el.setAttribute("hasChatGPT", "true");

      const icon = el?.querySelector("svg");
      const iconColor = window.getComputedStyle(icon!)?.color || "#8e8e8e";

      el?.insertAdjacentHTML(
        "beforebegin",
        `<div id="${CHATGPT_BTN_ID}" role="button" class="twitter">${ChatGPTIcon(
          20,
          iconColor
        )}</div>`
      );
    });
};

export const handler = async () => {
  document.body.addEventListener("click", async (e) => {
    const target = e.target as Element;
    const btn = target?.closest(`#${CHATGPT_BTN_ID}`);
    if (!btn) return;

    const config = await getConfig();
    if (!config?.["social-comments-openapi-key"])
      return alert("Please set OpenAI key.");

    const commentInputWrapper = closestSibling(
      btn,
      `[class="DraftEditor-root"]`
    );
    if (!commentInputWrapper) return;
    setTweetText(commentInputWrapper, "ChatGPT is thinking...");

    btn.setAttribute("disabled", "true");
    btn.setAttribute("loading", "true");

    const content =
      closestSibling(btn, `[data-testid="tweetText"]`)?.textContent || "";

    const comment = await getComment(config, Domains.Twitter, content);
    if (comment.length) {
      setTweetText(commentInputWrapper, comment);
    } else {
      setTweetText(
        commentInputWrapper,
        "ChatGPT failed. Maybe update key and try again."
      );
    }

    btn.setAttribute("disabled", "false");
    btn.setAttribute("loading", "false");
  });
};

function selectText(element: Element) {
  var range = document.createRange();
  range.selectNode(element);
  window?.getSelection()?.removeAllRanges();
  window?.getSelection()?.addRange(range);
}

const setTweetText = async (commentInputWrapper: Element, text: string) => {
  const editable = commentInputWrapper?.querySelector(`[contenteditable]`);
  editable?.addEventListener("selectAll", () => {
    document.execCommand("selectAll");
  });

  if (editable?.textContent?.length) {
    (editable as any)?.click();
    editable.dispatchEvent(new CustomEvent("selectAll"));
    await delay(500);
  }

  const data = new DataTransfer();
  data.setData("text/plain", text);
  editable?.dispatchEvent(
    new ClipboardEvent("paste", {
      bubbles: true,
      clipboardData: data,
      cancelable: true,
    })
  );
};

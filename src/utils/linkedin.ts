import ChatGPTIcon from "../components/ChatGPTIcon";

import { CHATGPT_BTN_ID, Domains } from "./constants";
import { getComment, delay } from "./shared";
import getConfig from "./config";

export const injector = () => {
  document
    .querySelectorAll(
      ".comments-comment-texteditor > .display-flex > .display-flex"
    )
    .forEach((el) => {
      if (el.getAttribute("hasChatGPT") === "true") return;
      el.setAttribute("hasChatGPT", "true");

      const chatGPTBtn = document.createElement("button");
      chatGPTBtn.setAttribute("type", "button");
      chatGPTBtn.setAttribute("id", CHATGPT_BTN_ID);
      chatGPTBtn.setAttribute(
        "class",
        "artdeco-button--tertiary artdeco-button artdeco-button--circle artdeco-button--muted"
      );
      chatGPTBtn.innerHTML = ChatGPTIcon(20, "#666666");
      el.prepend(chatGPTBtn);
    });
};

export const handler = async () => {
  document.body.addEventListener("click", async (e) => {
    const target = e.target as Element;
    const btn = target?.closest(`#${CHATGPT_BTN_ID}`);
    if (!btn) return;

    const config = await getConfig();
    if (!config["social-comments-openapi-key"])
      return alert("Please set OpenAI key.");

    const wrapper = target?.closest(".feed-shared-update-v2");
    if (!wrapper) return;

    const commentInputEl = wrapper.querySelector(".ql-editor")!;
    commentInputEl.innerHTML = "";

    commentInputEl.setAttribute("data-placeholder", "ChatGPT is thinking...");
    btn.setAttribute("disabled", "true");
    btn.setAttribute("loading", "true");

    const content =
      (
        wrapper.querySelector(
          '.feed-shared-inline-show-more-text span[dir="ltr"]'
        ) as HTMLElement
      )?.innerText || "";

    const comment = await getComment(config, Domains.LinkedIn, content);
    if (comment.length) {
      commentInputEl.innerHTML = comment;
    } else {
      commentInputEl.setAttribute(
        "data-placeholder",
        "ChatGPT failed. Maybe update key and try again."
      );
      await delay(3000);
    }

    commentInputEl.setAttribute("data-placeholder", "Add a comment..");
    btn.removeAttribute("disabled");
    btn.removeAttribute("loading");
  });
};

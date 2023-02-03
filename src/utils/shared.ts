import { notyf } from "../chrome/content_script";
import { Config } from "./config";
import { Domains, TOAST_CLASSNAME } from "./constants";
import { HashtagOptions } from "./options";
import { WELCOME_PAGE } from "./constants";
import { createPrompt, generateErrorMessage } from "./generators";

export const getComment = async (
  config: Config,
  domain: Domains,
  content: string
): Promise<string> => {
  const body = {
    model: `text-davinci-00${config["opt-model-type"]}`,
    prompt: createPrompt(domain, config, content),
    temperature: 0,
    max_tokens: 3000,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config["social-comments-openapi-key"]}`,
    },
    body: JSON.stringify(body),
  };

  const resp = await fetch("https://api.openai.com/v1/completions", options);
  const chatGPTResp = await resp.json();

  if (!resp.ok) {
    const { title, message } = generateErrorMessage(resp.status);
    notyf?.error({
      duration: 0,
      dismissible: true,
      message: `<div class="title">${title}</div><p>${message}</p><p class="small">See <a href="https://help.openai.com/en/articles/6891839-api-error-code-guidance" target="_blank">OpenAI API error guidance</a> for more info.</p>`,
      className: `${TOAST_CLASSNAME} ${domain.replace(/([.]\w+)$/, "")}`,
      ripple: false,
    });
    return "";
  }

  let comment = (chatGPTResp?.["choices"]?.[0]?.["text"] || "")
    .replace(/^\s+|\s+$/g, "")
    .replace(/(^"|"$)/g, "");

  if (config["opt-hashtag-option"] === HashtagOptions.NO) {
    comment = comment.replace(/#\w+/g, "");
  }

  return comment;
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const closestSibling = (
  element: Element,
  query: string
): Element | null => {
  const parent = element.parentElement;
  if (parent === null) return null;
  const sibling = parent.querySelector(query);
  if (sibling !== null) return sibling;
  return closestSibling(parent, query);
};

export const setInnerHTML = (element: Element, html: string) => {
  try {
    element.innerHTML = html;
  } catch {}
};

export const imitateKeyInput = (el: HTMLTextAreaElement, keyChar: string) => {
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

export const showAPIKeyError = (domain: Domains) => {
  notyf?.error({
    duration: 3000,
    dismissible: true,
    message: `<div class="title">API key is not set</div><p>Please set OpenAI API key in the popup.</p><p class="small">See <a href="${WELCOME_PAGE}" target="_blank">onboarding</a> for more info.</p>`,
    className: `${TOAST_CLASSNAME} ${domain.replace(/([.]\w+)$/, "")}`,
    ripple: false,
  });
};

import { Config } from "./config";
import { Domains } from "./constants";
import { HashtagOptions } from "./options";
import { createPrompt } from "./generators";

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
  if (!resp.ok) return "";

  const chatGPTResp = await resp.json();

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

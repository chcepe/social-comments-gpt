import { Config } from "./config";
import { Domains } from "./constants";
import { HashtagOptions } from "./options";
import { createPrompt } from "./prompts";

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

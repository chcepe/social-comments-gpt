import { Config } from "./config";
import { Domains } from "./constants";
import { CommentsStyle } from "./options";

export const createPrompt = (
  domain: Domains,
  config: Config,
  content: string
): string => {
  let prompts: string[] = [];
  switch (domain) {
    case Domains.Instagram:
      prompts = config["opt-insta-prompts"];
      break;
    case Domains.LinkedIn:
      prompts = config["opt-linkedin-prompts"];
      break;
    case Domains.Twitter:
      prompts = config["opt-twitter-prompts"];
      break;
  }

  let prompt = prompts?.[Math.floor(Math.random() * prompts.length)] || "";
  prompt = prompt.replace("{postContent}", content);

  if (
    config["opt-comment-style"] === CommentsStyle.ANYTHING &&
    !config["opt-excluded-words"].length
  ) {
    return prompt;
  }

  // Append options
  prompt += "\n\nAs a commentator on that post you must follow these rules:";

  if (config["opt-excluded-words"].length) {
    const words = config["opt-excluded-words"]
      .map((word: string) => `"${word}"`)
      .join(", ");
    prompt += ` please strictly don't mention any of the following words: ${words};`;
  }

  // Comment style option
  switch (config?.["opt-comment-style"]) {
    case CommentsStyle.PROFESSIONAL:
      prompt += " please respond in a very professional way.";
      break;
    case CommentsStyle.INFORMAL:
      prompt += " please respond in very informal way.";
      break;
    case CommentsStyle.DIRECT:
      prompt += " please respond in very direct way.";
      break;
    case CommentsStyle.FRIENDLY:
      prompt += " please respond in very friendly way.";
      break;
    case CommentsStyle.FUNNY:
      prompt += " please respond in a very funny way.";
      break;
  }

  if (prompt[prompt.length - 1] === ";") {
    prompt = prompt.substring(0, prompt.length - 1);
    prompt += ".";
  }

  return prompt;
};

export const generateAnnouncementId = (id: string, domain: Domains) =>
  `social-comments-gpt-announcement-${id}-${domain}`;

type ErrorMessage = { title: string; message: string };
export const generateErrorMessage = (code: number): ErrorMessage => {
  switch (code) {
    case 400:
      return {
        title: "OpenAI 400 Error: Content is too long",
        message: `The content of this posts seems to be too long. It exceed the limit of character allowed by OpenAI.`,
      };
    case 401:
      return {
        title: "OpenAI 401 Error: Invalid API Key",
        message: `Ensure that the API key you provided is correct, clear your browser cache, or <a href="https://platform.openai.com/account/api-keys" target="_blank">generate a new one</a>.`,
      };
    case 429:
      return {
        title: "OpenAI 429 Error: You are sending requests too quickly.",
        message: `Please slow down your requests. Read the <a href="https://platform.openai.com/docs/guides/rate-limits" target="_blank">Rate limit guide</a>.`,
      };
  }

  return {
    title: "OpenAI Error: Issue on our servers.",
    message: `Retry your request after a brief wait and contact us if the issue persists. Check the <a href="https://status.openai.com/" target="_blank">status page.</a>`,
  };
};

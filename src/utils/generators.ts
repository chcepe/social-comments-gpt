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

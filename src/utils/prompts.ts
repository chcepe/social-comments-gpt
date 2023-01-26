import { Config } from "./config";
import { Domains } from "./constants";
import { CommentsStyle, HashtagOptions } from "./options";

export const LINKED_IN_PROMPTS = [
  `I want you to act as a linkedin user that puts comments on different posts to engage other people. Here is the post "{postContent}"`,
  `I want you to act as a linkedin user that creates insightful comments on different posts to gain followers. Here is the content of the post "{postContent}"`,
  `I want you to act as a linkedin user that add comments on different posts to engage other people and have more impressions. Here is what the post about "{postContent}"`,
];

export const INSTAGRAM_PROMPTS = [
  `I want you to act as an instagram user that puts comments on different posts to engage other people and have more followers. Here is the post "{postContent}"`,
  `I want you to act as an instagram influencer that creates insightful comments on different posts to gain followers and more profile views. Here is the content of the post "{postContent}"`,
  `I want you to act as an instagram user that add comments on different posts to engage other people and have more impressions, views, and followers. Here is what the post about "{postContent}"`,
];

export const createPrompt = (
  domain: Domains,
  config: Config,
  content: string
): string => {
  let prompts: string[] = [];
  switch (domain) {
    case Domains.Instagram:
      prompts = config?.["opt-insta-prompts"] || INSTAGRAM_PROMPTS;
      break;
    case Domains.LinkedIn:
      prompts = config?.["opt-linkedin-prompts"];
      break;
  }

  let prompt = prompts?.[Math.floor(Math.random() * prompts.length)] || "";
  prompt = prompt.replace("{postContent}", content);

  if (
    config["opt-hashtag-option"] === HashtagOptions.RANDOMLY &&
    config["opt-comment-style"] === CommentsStyle.ANYTHING &&
    !config["opt-excluded-words"].length
  ) {
    return prompt;
  }

  // Append options
  prompt += "\n\nAs a commentator on that post you must follow these rules:";

  // Hashtag option
  switch (config["opt-hashtag-option"]) {
    case HashtagOptions.ALWAYS:
      prompt += " please respond with hashtags;";
      break;
    case HashtagOptions.NO:
      prompt += " please respond strictly without hashtags;";
      prompt = prompt.replace(/\b\#\w+/g, "");
  }

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

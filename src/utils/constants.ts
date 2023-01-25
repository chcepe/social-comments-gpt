import { CheckboxOption } from "../components/Checkbox/Checkbox";

export const CHATGPT_BTN_ID = "chatgpt-btn";

export const OPEN_AI_KEY = "social-comments-openapi-key";

export enum Domains {
  LinkedIn = "linkedin.com",
  Instagram = "instagram.com",
}

export const ALLOWED_DOMAINS: Domains[] = [Domains.LinkedIn, Domains.Instagram];

export const LINKED_IN_PROMPTS = [
  `I want you to act as a linkedin user that puts comments on different posts to engage other people. Here is the post "{content}"`,
  `I want you to act as a linkedin user that creates insightful comments on different posts to gain followers. Here is the content of the post "{content}"`,
  `I want you to act as a linkedin user that add comments on different posts to engage other people and have more impressions. Here is what the post about "{content}"`,
];

export const INSTAGRAM_PROMPTS = [
  `I want you to act as an instagram user that puts comments on different posts to engage other people and have more followers. Here is the post "{content}"`,
  `I want you to act as an instagram influencer that creates insightful comments on different posts to gain followers and more profile views. Here is the content of the post "{content}"`,
  `I want you to act as an instagram user that add comments on different posts to engage other people and have more impressions, views, and followers. Here is what the post about "{content}"`,
];

// Comments Style Options

export enum CommentsStyle {
  PROFESSIONAL = "professional",
  DIRECT = "direct",
  FRIENDLY = "friendly",
  ANYTHING = "anything",
}

export const COMMENTS_STYLE_OPTIONS: CheckboxOption[] = [
  {
    value: CommentsStyle.PROFESSIONAL,
    label: "Professional",
  },
  {
    value: CommentsStyle.DIRECT,
    label: "Direct",
  },
  {
    value: CommentsStyle.FRIENDLY,
    label: "Friendly",
  },
  {
    value: CommentsStyle.ANYTHING,
    label: "Anything",
  },
];

// Hashtag Options
export enum HashtagOptions {
  YES = "yes",
  NO = "no",
  RANDOMLY = "randomly",
}

export const HASHTAG_OPTIONS: CheckboxOption[] = [
  { value: HashtagOptions.YES, label: "Yes" },
  { value: HashtagOptions.NO, label: "No" },
  { value: HashtagOptions.RANDOMLY, label: "Randomly" },
];

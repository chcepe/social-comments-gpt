import { CheckboxOption } from "../components/Checkbox/Checkbox";

export const CHATGPT_BTN_ID = "chatgpt-btn";

// Chrome storage
export const OPEN_AI_KEY = "social-comments-openapi-key";
export const OPT_COMMENT_STYLE = "opt-comment-style";
export const OPT_HASHTAGS = "opt-hashtag-option";

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
  INFORMAL = "informal",
  DIRECT = "direct",
  FRIENDLY = "friendly",
  ANYTHING = "anything",
}

export const COMMENTS_STYLE_OPTS: CheckboxOption[] = [
  {
    value: CommentsStyle.ANYTHING,
    label: "Anything",
  },
  {
    value: CommentsStyle.INFORMAL,
    label: "Informal",
  },
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
];

export const COMMENTS_STYLE_OPT_DEFAULT = CommentsStyle.ANYTHING;

// Hashtag Options
export enum HashtagOptions {
  ALWAYS = "Always",
  NO = "no",
  RANDOMLY = "randomly",
}

export const HASHTAG_OPTS: CheckboxOption[] = [
  { value: HashtagOptions.RANDOMLY, label: "Randomly" },
  { value: HashtagOptions.ALWAYS, label: "Always" },
  { value: HashtagOptions.NO, label: "No" },
];

export const HASHTAG_OPT_DEFAULT = HashtagOptions.RANDOMLY;

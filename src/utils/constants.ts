export const CHATGPT_BTN_ID = "chatgpt-btn";

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
export const CHATGPT_BTN_ID = "chatgpt-btn";

export enum Domains {
  LinkedIn = "linkedin.com",
  Instagram = "instagram.com",
  Twitter = "twitter.com",
}

export const ALLOWED_DOMAINS: Domains[] = [
  Domains.LinkedIn,
  Domains.Instagram,
  Domains.Twitter,
];

export const ANNOUNCEMENTS_API =
  "https://social-comments-gpt-site.vercel.app/api/announcements";

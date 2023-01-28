export const CHATGPT_BTN_ID = "chatgpt-btn";

export enum Domains {
  LinkedIn = "linkedin.com",
  Instagram = "instagram.com",
}

export const ALLOWED_DOMAINS: Domains[] = [Domains.LinkedIn, Domains.Instagram];

export const ANNOUNCEMENTS_API =
  "https://social-comments-gpt-site.vercel.app/api/announcements";

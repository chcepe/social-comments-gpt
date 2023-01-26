// OpenAI Key
const OPEN_AI_KEY = "social-comments-openapi-key";

// Options
const OPT_COMMENT_STYLE = "opt-comment-style";
const OPT_HASHTAGS = "opt-hashtag-option";
const OPT_INSTA_PROMPTS = "opt-insta-prompts";
const OPT_LINKEDIN_PROMPTS = "opt-linkedin-prompts";

type StorageKeys =
  | typeof OPEN_AI_KEY
  | typeof OPT_COMMENT_STYLE
  | typeof OPT_HASHTAGS
  | typeof OPT_INSTA_PROMPTS
  | typeof OPT_LINKEDIN_PROMPTS;

export const getStorageValue = <T>(key: StorageKeys): Promise<T> =>
  new Promise((resolve, reject) =>
    chrome.storage.sync.get([key], (result: Record<string, string>) => {
      resolve((result?.[key] || "") as T);
    })
  );

export const setStorageValue = (
  key: StorageKeys,
  value: any
): Promise<boolean> =>
  new Promise((resolve, reject) =>
    chrome.storage.sync.set({ [key]: value }, () => {
      resolve(true);
    })
  );

// OpenAI Key
const OPEN_AI_KEY = "social-comments-openapi-key";

// Options
const OPT_COMMENT_STYLE = "opt-comment-style";
const OPT_HASHTAGS = "opt-hashtag-option";

type StorageKeys =
  | typeof OPEN_AI_KEY
  | typeof OPT_COMMENT_STYLE
  | typeof OPT_HASHTAGS;

export const getStorageValue = (key: StorageKeys): Promise<string> =>
  new Promise((resolve, reject) =>
    chrome.storage.sync.get([key], (result: Record<string, string>) => {
      console.log("GET", { key, result: JSON.stringify(result) });
      resolve(result?.[key] || "");
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

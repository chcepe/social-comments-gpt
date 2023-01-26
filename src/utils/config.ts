import {
  COMMENTS_STYLE_OPT_DEFAULT,
  HASHTAG_OPT_DEFAULT,
  MODEL_OPT_DEFAULT,
} from "./options";
import { INSTAGRAM_PROMPTS, LINKED_IN_PROMPTS } from "./prompts";

const OPTIONS = [
  "social-comments-openapi-key",
  "opt-model-type",
  "opt-comment-style",
  "opt-hashtag-option",
  "opt-excluded-words",
  "opt-insta-prompts",
  "opt-linkedin-prompts",
] as const;

export type StorageKeys = (typeof OPTIONS)[number];

export type Config = Record<StorageKeys, any>;

const defaultConfig: Config = {
  "social-comments-openapi-key": "",
  "opt-comment-style": COMMENTS_STYLE_OPT_DEFAULT,
  "opt-excluded-words": [],
  "opt-insta-prompts": INSTAGRAM_PROMPTS,
  "opt-linkedin-prompts": LINKED_IN_PROMPTS,
  "opt-model-type": MODEL_OPT_DEFAULT,
  "opt-hashtag-option": HASHTAG_OPT_DEFAULT,
};

export default (): Promise<Config> =>
  new Promise((resolve, reject) =>
    chrome.storage.local.get(OPTIONS, (result) => {
      const config = Object.keys(defaultConfig).reduce((a, c) => {
        return {
          ...a,
          // @ts-ignore
          [c]: result?.[c] || defaultConfig[c],
        };
      }, {});

      resolve(config as Config);
    })
  );

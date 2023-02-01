import {
  COMMENTS_STYLE_OPT_DEFAULT,
  HASHTAG_OPT_DEFAULT,
  MODEL_OPT_DEFAULT,
} from "./options";
import {
  INSTAGRAM_PROMPTS,
  LINKED_IN_PROMPTS,
  TWITTER_PROMPTS,
} from "./prompts";

const OPTIONS = [
  "social-comments-openapi-key",
  "opt-model-type",
  "opt-comment-style",
  "opt-hashtag-option",
  "opt-excluded-words",
  "opt-insta-prompts",
  "opt-linkedin-prompts",
  "opt-twitter-prompts",
] as const;

export type StorageKeys = (typeof OPTIONS)[number];

export type Config = Record<StorageKeys, any>;

export const DEFAULT_CONFIG: Config = {
  "social-comments-openapi-key": "",
  "opt-comment-style": COMMENTS_STYLE_OPT_DEFAULT,
  "opt-excluded-words": [],
  "opt-insta-prompts": INSTAGRAM_PROMPTS,
  "opt-linkedin-prompts": LINKED_IN_PROMPTS,
  "opt-twitter-prompts": TWITTER_PROMPTS,
  "opt-model-type": MODEL_OPT_DEFAULT,
  "opt-hashtag-option": HASHTAG_OPT_DEFAULT,
};

export default (): Promise<Config> =>
  new Promise((resolve, reject) =>
    chrome?.storage?.local?.get(OPTIONS, (result) => {
      const config = Object.keys(DEFAULT_CONFIG).reduce((a, c) => {
        return {
          ...a,
          // @ts-ignore
          [c]: result?.[c] || DEFAULT_CONFIG[c],
        };
      }, {});

      resolve(config as Config);
    })
  );

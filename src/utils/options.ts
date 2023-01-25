import { CheckboxOption } from "../components/Checkbox/Checkbox";

// Comments Style Options
export enum CommentsStyle {
  PROFESSIONAL = "professional",
  INFORMAL = "informal",
  DIRECT = "direct",
  FRIENDLY = "friendly",
  ANYTHING = "anything",
}

export const COMMENTS_STYLE_OPT_DEFAULT = CommentsStyle.ANYTHING;
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

// Hashtag Options
export enum HashtagOptions {
  ALWAYS = "Always",
  NO = "no",
  RANDOMLY = "randomly",
}

export const HASHTAG_OPT_DEFAULT = HashtagOptions.RANDOMLY;
export const HASHTAG_OPTS: CheckboxOption[] = [
  { value: HashtagOptions.RANDOMLY, label: "Randomly" },
  { value: HashtagOptions.ALWAYS, label: "Always" },
  { value: HashtagOptions.NO, label: "No" },
];

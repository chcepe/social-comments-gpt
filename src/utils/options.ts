import { CheckboxOption } from "../components/Checkbox/Checkbox";

// Model Options
export enum ModelOptions {
  Davinci3 = "3",
  Davinci2 = "2",
}

export const MODEL_OPT_DEFAULT = ModelOptions.Davinci3;
export const MODEL_OPTS: CheckboxOption[] = [
  { value: ModelOptions.Davinci2, label: "text-davinci-002" },
  { value: ModelOptions.Davinci3, label: "text-davinci-003" },
];

// Comments Style Options
export enum CommentsStyle {
  PROFESSIONAL = "professional",
  INFORMAL = "informal",
  DIRECT = "direct",
  FRIENDLY = "friendly",
  FUNNY = "funny",
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
  {
    value: CommentsStyle.FUNNY,
    label: "Funny",
  },
];

// Hashtag Options
export enum HashtagOptions {
  RANDOMLY = "randomly",
  NO = "no",
}

export const HASHTAG_OPT_DEFAULT = HashtagOptions.RANDOMLY;
export const HASHTAG_OPTS: CheckboxOption[] = [
  { value: HashtagOptions.RANDOMLY, label: "Yes" },
  { value: HashtagOptions.NO, label: "No, please" },
];

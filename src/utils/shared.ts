import { OPEN_AI_KEY } from "./constants";

export const getOpenAIKey = (): Promise<string> =>
  new Promise((resolve, reject) =>
    chrome.storage.sync.get([OPEN_AI_KEY], (result: Record<string, string>) =>
      resolve(result?.[OPEN_AI_KEY] || "")
    )
  );

export const getComment = async (
  openAIkey: string,
  prompts: string[],
  content: string
): Promise<string> => {
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];
  const body = {
    model: "text-davinci-003",
    prompt: prompt.replace("{content}", content),
    temperature: 0,
    max_tokens: 3000,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAIkey}`,
    },
    body: JSON.stringify(body),
  };

  const resp = await fetch("https://api.openai.com/v1/completions", options);
  if (!resp.ok) return "";

  const chatGPTResp = await resp.json();

  return (chatGPTResp?.["choices"]?.[0]?.["text"] || "")
    .replace(/^\s+|\s+$/g, "")
    .replace(/(^"|"$)/g, "");
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

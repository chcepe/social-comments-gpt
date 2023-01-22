export const getComment = async (
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
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify(body),
  };

  const resp = await fetch("https://api.openai.com/v1/completions", options);
  if (!resp.ok) {
    const message = `An error has occured: ${resp.status}`;
    throw new Error(message);
  }

  const chatGPTResp = await resp.json();

  return (chatGPTResp?.["choices"]?.[0]?.["text"] || "")
    .replace(/^\s+|\s+$/g, "")
    .replace(/(^"|"$)/g, "");
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

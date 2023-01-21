import { CHATGPT_BTN_ID } from "./constants";

export const getComment = async (prompts: string[], content: string) => {
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

  return (
    chatGPTResp?.["choices"]?.[0]?.["text"]?.replace(/^\s+|\s+$/g, "") || ""
  );
};

export const appendStyles = () => {
  const styles = `<style>
    .instafeed-chatgpt-btn {
      padding: 8px 10px 8px 0;
    }

    .instareels-chatgpt-btn {
      padding-right: 6px;
    }

    .instafeed-chatgpt-btn, .instareels-chatgpt-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .instafeed-chatgpt-btn:not([disabled="true"]):hover, .instareels-chatgpt-btn:not([disabled="true"]):hover {
      opacity: 0.6;
    }

    .insta-with-chatgpt {
      display: flex !important; 
      align-items: center;
    }

    #${CHATGPT_BTN_ID}:disabled, #${CHATGPT_BTN_ID}[disabled="true"] {
      opacity: 0.3 !important;
      cursor: not-allowed;
    }

    #${CHATGPT_BTN_ID}[loading="true"] {
      animation: rotation 2s infinite linear;
    }

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    </style>`;

  document.head.insertAdjacentHTML("beforeend", styles);
};

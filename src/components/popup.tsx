import * as React from "react";
import ReactDOM from "react-dom";

import { OPEN_AI_KEY } from "../utils/constants";

const Popup = () => {
  const [openAIKey, setOpenAIKey] = React.useState<string>("");

  React.useEffect(() => {
    chrome.storage.sync.get([OPEN_AI_KEY], (result) => {
      if (result?.[OPEN_AI_KEY]) setOpenAIKey(result[OPEN_AI_KEY]);
    });
  }, []);

  React.useEffect(() => {
    chrome.storage.sync.set({ [OPEN_AI_KEY]: openAIKey }, () => {});
  }, [openAIKey]);

  return (
    <>
      <input
        placeholder="xxxxxxxx"
        type="text"
        value={openAIKey}
        onChange={(e) => {
          setOpenAIKey(e.target.value);
        }}
      />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);

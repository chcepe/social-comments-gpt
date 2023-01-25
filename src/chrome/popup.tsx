import * as React from "react";
import ReactDOM from "react-dom";

import SettingsIcon from "../components/SettingsIcon";
import Logo from "../components/Logo";
import { getStorageValue, setStorageValue } from "../utils/storage";
import "./popup.css";

const Popup = () => {
  const [openAIKey, setOpenAIKey] = React.useState<string>("");

  React.useEffect(() => {
    (async () => {
      const key = await getStorageValue("social-comments-openapi-key");
      setOpenAIKey(key);
    })();
  }, []);

  React.useEffect(() => {
    if (openAIKey.length)
      setStorageValue("social-comments-openapi-key", openAIKey);
  }, [openAIKey]);

  const handleOptions = () => {
    chrome.runtime.openOptionsPage();
  };

  return (
    <>
      <div className="container">
        <Logo className="logo" />

        {/* OpenAPI Key */}
        <label htmlFor="open-api-key">Enter your OpenAPI key:</label>
        <input
          id="open-api-key"
          className="input-api-key"
          placeholder="xxxxxxxx"
          type="text"
          value={openAIKey}
          onChange={(e) => {
            setOpenAIKey(e.target.value);
          }}
        />

        {/* Help */}
        <p>
          Have some questions? More information{" "}
          <a
            target="_blank"
            href="https://github.com/chcepe/social-comments-gpt"
          >
            here.
          </a>
        </p>

        {/* Settings */}
        <div onClick={handleOptions} className="settings-btn">
          <span>Options</span>
          <SettingsIcon />
        </div>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);

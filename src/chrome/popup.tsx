import * as React from "react";
import ReactDOM from "react-dom";

import ICSettings from "../components/ICSettings";
import Logo from "../components/Logo";
import useChromeStorage from "../hooks/useChromeStorage";
import "./popup.css";

const Popup = () => {
  const [openAIKey, setOpenAIKey, { loading }] = useChromeStorage<string>(
    "social-comments-openapi-key",
    ""
  );

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
          disabled={loading}
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
          <ICSettings width={14} height={14} />
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

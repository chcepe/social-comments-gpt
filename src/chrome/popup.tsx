import * as React from "react";
import ReactDOM from "react-dom";

import ICSettings from "../components/ICSettings";
import Logo from "../components/Logo";
import useChromeStorage from "../hooks/useChromeStorage";
import { WELCOME_PAGE } from "../utils/constants";
import * as Styled from "./popup.styled";
import "./common.css";

const Popup = () => {
  const [openAIKey, setOpenAIKey, { loading }] = useChromeStorage<string>(
    "social-comments-openapi-key",
    ""
  );

  const handleOptions = () => {
    chrome.runtime.openOptionsPage();
  };

  return (
    <Styled.Wrapper>
      <Logo className="logo" />

      {/* OPENAI API Key */}
      <label htmlFor="open-api-key">Enter your OpenAI API key:</label>
      <input
        id="open-api-key"
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
        <a target="_blank" href={WELCOME_PAGE}>
          here.
        </a>
      </p>

      {/* Settings */}
      <Styled.SettingsBtn onClick={handleOptions}>
        <span>Options</span>
        <ICSettings width={14} height={14} />
      </Styled.SettingsBtn>

      <p>
        <a href="https://social-comments-gpt.com/" target="_blank">
          social-comments-gpt.com
        </a>{" "}
        &copy; 2022
      </p>
    </Styled.Wrapper>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);

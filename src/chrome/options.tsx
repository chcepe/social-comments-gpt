import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Container from "../components/Container";
import IcInstagram from "../components/IcInstagram";
import IcLinkedIn from "../components/IcLinkedIn";
import IcSettings from "../components/ICSettings";
import ICTwitter from "../components/IcTwitter";
import Logo from "../components/Logo";
import Section, { Props as SectionProps } from "../components/Section";
import Tab, { TabItem } from "../components/Tab";
import CommentStyleOptions from "./containers/CommentStyleOptions";
import HashtagOptions from "./containers/HashtagOptions";
import ExcludedWords from "./containers/ExcludedWords";
import Prompts from "./containers/Prompts";
import { Domains } from "../utils/constants";

import "./common.css";

const SECTIONS: (SectionProps & { comp: JSX.Element })[] = [
  // {
  //   title: "OpenAI Model",
  //   desc: "Model to use for OpenAI API. text-davinci-003 produces higher quality writing.",
  //   comp: <ModelOptions />,
  // },
  {
    title: "Comment style",
    desc: "Whether generated comments will be professional, informal, etc.",
    comp: <CommentStyleOptions />,
  },
  {
    title: "Allow hashtags",
    desc: "Would you like to allow hashtags in generated comments?",
    comp: <HashtagOptions />,
  },
  {
    title: "Words to avoid",
    desc: "Words that will not be mentioned often in generated comments. It's not 100% guaranteed these words won't be mentioned.",
    comp: <ExcludedWords />,
  },
];

const TABS: TabItem[] = [
  {
    title: "Settings",
    comp: (
      <>
        {SECTIONS.map((section, i) => {
          const { comp, ...rest } = section;
          return (
            <Section key={section.title + i} {...rest}>
              {comp}
            </Section>
          );
        })}
      </>
    ),
    icon: <IcSettings />,
  },
  {
    title: "Instagram Prompts",
    comp: <Prompts type={Domains.Instagram} />,
    icon: <IcInstagram />,
  },
  {
    title: "LinkedIn Prompts",
    comp: <Prompts type={Domains.LinkedIn} />,
    icon: <IcLinkedIn />,
  },
  {
    title: "Twitter Prompts",
    comp: <Prompts type={Domains.Twitter} />,
    icon: <ICTwitter />,
  },
];

export const Main = styled.div`
  margin: 24px 0;
`;

const Options = () => {
  return (
    <Container>
      <Logo />

      {/* Tabs */}
      <Main>
        <Tab tabs={TABS} />
      </Main>

      {/* Copyright */}
      <p>
        <a href="https://social-comments-gpt.com/" target="_blank">
          social-comments-gpt.com
        </a>{" "}
        &copy; 2022
      </p>

      {/* Credits */}
      <p>
        Made with ❤️ by{" "}
        <a href="https://chcepe.github.io/" target="_blank">
          chcepe
        </a>
      </p>
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);

import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Container from "../components/Container";
import IcInstagram from "../components/IcInstagram";
import IcLinkedIn from "../components/IcLinkedIn";
import IcSettings from "../components/ICSettings";
import Logo from "../components/Logo";
import Section, { Props as SectionProps } from "../components/Section";
import Tab, { TabItem } from "../components/Tab";
import CommentStyleOptions from "./containers/CommentStyleOptions";
import HashtagOptions from "./containers/HashtagOptions";
import ModelOptions from "./containers/ModelOptions";
import ExcludedWords from "./containers/ExcludedWords";
import Prompts from "./containers/Prompts";
import { Domains } from "../utils/constants";

const SECTIONS: (SectionProps & { comp: JSX.Element })[] = [
  {
    title: "OpenAI Model",
    desc: "Model to use for OpenAI API. text-davinci-003 produces higher quality writing.",
    comp: <ModelOptions />,
  },
  {
    title: "Comment style",
    desc: "Whether generated comments will be professional, informal, etc.",
    comp: <CommentStyleOptions />,
  },
  {
    title: "Allow hashtags",
    desc: "Would you like to include hashtags for every generate comments?",
    comp: <HashtagOptions />,
  },
  {
    title: "Exclude words",
    desc: "Words that will not be mentioned in generated comments.",
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
];

export const Main = styled.div`
  margin: 24px 0;
`;

const Options = () => {
  return (
    <Container>
      <Logo />
      <Main>
        <Tab tabs={TABS} />
      </Main>
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);

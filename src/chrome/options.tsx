import * as React from "react";
import ReactDOM from "react-dom";

import Container from "../components/Container";
import Logo from "../components/Logo";
import Section, { Props as SectionProps } from "../components/Section";
import CommentStyleOptions from "./containers/CommentStyleOptions";
import HashtagOptions from "./containers/HashtagOptions";
import Prompts from "./containers/Prompts";

const SECTIONS: (SectionProps & { comp: JSX.Element })[] = [
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
    title: "Prompts",
    desc: "Prompts that will be sent on ChatGPT when generating a comment.",
    comp: <Prompts />,
  },
];

const Options = () => {
  return (
    <Container>
      <Logo />
      {SECTIONS.map((section, i) => {
        const { comp, ...rest } = section;
        return (
          <Section key={section.title + i} {...rest}>
            {comp}
          </Section>
        );
      })}
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);

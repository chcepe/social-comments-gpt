import * as React from "react";
import ReactDOM from "react-dom";

import Container from "../components/Container";
import Logo from "../components/Logo";
import Section, { Props as SectionProps } from "../components/Section";
import CommentStyleOptions from "./containers/CommentStyleOptions";
import HashtagOptions from "./containers/HashtagOptions";

const SECTIONS: (SectionProps & { comp: JSX.Element })[] = [
  {
    title: "Style of comment",
    desc: "Whether generated comments will be professional, informal, etc.",
    comp: <CommentStyleOptions />,
  },
  {
    title: "Allow hashtags",
    desc: "Whether generated comments will be professional, informal, etc.",
    comp: <HashtagOptions />,
  },
];

const Options = () => {
  return (
    <Container>
      <Logo />
      {SECTIONS.map((section) => {
        const { comp, ...rest } = section;
        return <Section {...rest}>{comp}</Section>;
      })}

      <Section title="Prompts">Style of comment</Section>
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);

import * as React from "react";

import * as Styled from "./Section.styled";

export interface Props {
  title: string;
  desc?: string;
}

const Section: React.FC<Props> = ({ title, desc, children }) => {
  return (
    <Styled.Wrapper>
      <Styled.Head>
        <h1>{title}</h1>
        {desc && <p>{desc}</p>}
      </Styled.Head>
      <Styled.Body>{children}</Styled.Body>
    </Styled.Wrapper>
  );
};

export default Section;

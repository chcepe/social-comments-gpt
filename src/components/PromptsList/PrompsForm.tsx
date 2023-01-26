import * as React from "react";

import * as Styled from "./PrompsForm.styled";

interface Props {
  onChange: (list: string[]) => void;
  values: string[];
}

const PrompsForm: React.FC<Props> = ({ onChange, values }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    alert("test");
  };

  return (
    <Styled.Wrapper>
      <Styled.Input
        placeholder="Enter your prompt here"
        onKeyDown={handleKeyDown}
      />
      <Styled.Actions></Styled.Actions>
      <Styled.List>
        {values.map((v) => (
          <Styled.Input>{v}</Styled.Input>
        ))}
      </Styled.List>
    </Styled.Wrapper>
  );
};

export default PrompsForm;

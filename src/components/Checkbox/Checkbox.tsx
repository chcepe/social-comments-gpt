import * as React from "react";

import * as Styled from "./Checkbox.styled";
import Icon, { State } from "./Icon";

export type CheckboxOption = { label: string; value: string };

interface Props {
  selected: string[];
  options: CheckboxOption[];
  onChange: (selected: string[]) => void;
  inline?: boolean;
  radio?: boolean;
}

const Checkbox: React.FC<Props> = ({ options, selected, onChange, inline }) => {
  const handleClick = (value: string) => {
    onChange([...selected, value]);
  };

  return (
    <Styled.Wrapper isInline={inline}>
      {options.map((option) => (
        <Styled.CheckboxItem selected={selected?.includes(option.value)}>
          <Icon state={State.Normal} />
          <span>{option.label}</span>
        </Styled.CheckboxItem>
      ))}
    </Styled.Wrapper>
  );
};

export default Checkbox;

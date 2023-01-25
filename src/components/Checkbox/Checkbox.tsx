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

const Checkbox: React.FC<Props> = ({
  options,
  selected,
  onChange,
  inline,
  radio,
}) => {
  const handleClick = (value: string) => {
    onChange([...selected, value].filter((v) => v));
  };

  return (
    <Styled.Wrapper isInline={inline}>
      {options.map((option) => {
        let state = State.Normal;
        const isSelected = selected?.includes(option.value);
        if (isSelected)
          state = radio ? State.RadioSelected : State.CheckboxSelected;

        return (
          <Styled.CheckboxItem
            key={option.value}
            onClick={() => handleClick(option.value)}
            selected={isSelected}
          >
            <Icon state={state} />
            <span>{option.label}</span>
          </Styled.CheckboxItem>
        );
      })}
    </Styled.Wrapper>
  );
};

export default Checkbox;

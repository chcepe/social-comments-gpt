import * as React from "react";
import ICClose from "../IcClose";

import * as Styled from "./TagsInput.styled";

interface Props {
  tags: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

const TagsInput: React.FC<Props> = ({ tags, onChange, placeholder }) => {
  const [inputText, setInputText] = React.useState("");

  const removeTags = (indexToRemove: number) => {
    onChange([...tags.filter((_, i) => i !== indexToRemove)]);
  };

  const addTags = (value: string) => {
    onChange([...tags, value]);
    setInputText("");
  };

  return (
    <Styled.Wrapper>
      <Styled.Tags>
        {tags.map((tag, i) => (
          <Styled.TagItem key={tag + i}>
            <span>{tag}</span>
            <ICClose width={14} height={14} onClick={() => removeTags(i)} />
          </Styled.TagItem>
        ))}

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={(event) =>
            event.key === "Enter" ? addTags(inputText) : null
          }
          placeholder={placeholder}
        />
      </Styled.Tags>
    </Styled.Wrapper>
  );
};

export default TagsInput;

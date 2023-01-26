import * as React from "react";

import ICCheck from "../ICCheck";
import ICPlus from "../IcPlus";
import ICTrash from "../ICTrash";

import * as Styled from "./PrompsForm.styled";
import { validate } from "./utils";

interface Props {
  onChange: (list: string[]) => void;
  items: string[];
}

const PrompsForm: React.FC<Props> = ({ onChange, items = [] }) => {
  const handleAdd = (newItem: string) => {
    onChange(Array.from([newItem, ...items]));
  };

  const handleEdit = (index: number) => (value: string) => {
    items[index] = value;
    onChange(Array.from(items));
  };

  const handleRemove = (index: number) => () => {
    onChange(Array.from(items.filter((_, i) => i !== index)));
  };

  return (
    <Styled.Wrapper>
      <TextArea type="add" onSubmit={handleAdd} />
      <Styled.List>
        {items.map((item, i) => (
          <Styled.Item key={item + i}>
            <TextArea
              key={item + i}
              type="edit"
              value={item}
              onSubmit={handleEdit(i)}
            />
            {i !== items.length - 1 && (
              <ICTrash className="delete-btn" onClick={handleRemove(i)} />
            )}
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Wrapper>
  );
};

interface TextAreaProps {
  onSubmit: (value: string) => void;
  type: "add" | "edit";
  value?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ value, type, onSubmit }) => {
  const [text, setText] = React.useState(value || "");
  const [error, setError] = React.useState<string>("");

  const handleSubmit = () => {
    const error = validate(text);
    if (error.length) {
      setError(error);
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    onSubmit(text);
    if (type === "add") setText("");
  };

  const SubmitBtn = type === "add" ? ICPlus : ICCheck;

  const showSubmitBtn =
    (type === "add" && text.length > 0) ||
    (type == "edit" && text.length > 0 && text !== value);

  return (
    <>
      <Styled.InputWrapper>
        <Styled.Input
          value={text}
          placeholder={`Enter your ${
            type === "add" ? "new " : ""
          }prompt here..`}
          onChange={(e) => {
            setText(e.target.value);
            setError("");
          }}
          isEdit={type === "edit"}
          $error={error.length > 0}
        />
        <span>{text.length}</span>
        {showSubmitBtn && (
          <SubmitBtn onClick={handleSubmit} isLinear className="submit-btn" />
        )}
      </Styled.InputWrapper>

      {error && <Styled.Error dangerouslySetInnerHTML={{ __html: error }} />}
    </>
  );
};

export default PrompsForm;

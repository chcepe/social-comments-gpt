import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

export const Wrapper = styled.div``;

export const Input = styled(TextareaAutosize)`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: auto;
  max-height: 110px;
  resize: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;

  :focus {
    outline: none !important;
    border-color: rgba(0, 0, 0, 0.4);
  }
`;

export const List = styled.div``;

export const Item = styled.div``;

export const Actions = styled.div``;

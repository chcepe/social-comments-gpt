import styled, { css } from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  span {
    display: none;
  }

  &:focus-within span {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0.5;
  }

  .submit-btn {
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    opacity: 0.6;
    transform: scale(1);
    transition: all 0.1s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Input = styled(TextareaAutosize)<{
  isEdit?: boolean;
  $error?: boolean;
}>`
  width: 100%;
  height: auto;
  max-height: 110px;
  resize: none;
  border: 1px solid
    ${({ $error }) => ($error ? "#ff0000" : "rgba(0, 0, 0, 0.1)")};
  border-radius: ${({ isEdit }) => (isEdit ? "0" : "16px")};
  padding: 24px;
  box-sizing: border-box;

  :focus {
    outline: none !important;
    border-color: rgba(0, 0, 0, 0.4);
  }
`;

export const List = styled.div`
  margin: 12px 0;
  padding: 0 24px 0 12px;
`;

export const Item = styled.div`
  margin: 4px 0;
  position: relative;

  .delete-btn {
    opacity: 0.2;
    position: absolute;
    right: -24px;
    top: 12px;
    cursor: pointer;
    transition: all 0.1s ease;
  }

  &:hover {
    .delete-btn {
      opacity: 1;
    }
  }
`;

export const Error = styled.div`
  margin: 6px 0;
  color: #ff0000;

  span {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 5px 7px;
    color: #000;
  }
`;

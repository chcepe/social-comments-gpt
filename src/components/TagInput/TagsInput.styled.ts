import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 48px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  box-sizing: border-box;

  &:focus-within {
    border: 1px solid #0052cc;
  }

  input {
    border: none;
    font-size: 14px;
    flex-grow: 1;

    &:focus {
      outline: transparent;
    }
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0;
  gap: 4px;
`;

export const TagItem = styled.div`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 8px;
  font-size: 12px;
  list-style: none;
  border-radius: 6px;
  background: linear-gradient(133.43deg, #4d0089 0%, #235f19 102.89%);
  margin: 8px 0;

  svg {
    opacity: 0.6;
    margin-left: 6px;
    cursor: pointer;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ isInline?: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isInline }) => (isInline ? "row" : "column")};
  gap: 8px;
`;

export const CheckboxItem = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  background: #fff;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    fill: rgba(0, 0, 0, 0.3);
  }

  ${({ selected }) => selected && `${selectedCSS}`}

  &:hover {
    ${({ selected }) => (selected ? `opacity: 0.9;` : `${selectedCSS}`)}
  }
`;

const selectedCSS = css`
  color: #fff;
  background: linear-gradient(133.43deg, #4d0089 0%, #235f19 102.89%);

  svg {
    fill: #fff;
  }
`;

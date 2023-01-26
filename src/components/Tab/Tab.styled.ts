import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabItem = styled.div<{ active?: boolean }>`
  padding: 16px 32px;
  border: 1px solid rgba(0, 0, 0, ${({ active }) => (active ? "0.4" : "0.1")});
  cursor: pointer;
  position: relative;

  .title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: bold;
    transition: all 0.2s ease;
    transform: ${({ active }) =>
      active ? "translateY(-8%)" : "translateY(20%)"};
    opacity: ${({ active }) => (active ? "1" : "0.5")};
  }

  &:hover {
    .title {
      transform: translateY(-8%);
      opacity: 1;
    }
  }

  .line {
    width: 100%;
    height: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(133.43deg, #4d0089 0%, #235f19 102.89%);
  }

  &:first-of-type {
    border-top-left-radius: 16px;
  }

  &:last-of-type {
    border-top-right-radius: 16px;
  }
`;

export const TabIcon = styled.div``;

export const Body = styled.div``;

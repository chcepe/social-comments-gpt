import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: auto;
  padding: 24px;
  position: relative;

  .logo {
    margin-bottom: 24px;
    height: 48px;
  }

  input {
    padding: 15px 20px;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
    margin: 8px 0;
  }

  input:focus {
    outline: none !important;
    border-color: rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 10px;
    text-align: center;
  }

  p a {
    font-weight: bold;
    text-decoration: none;
  }
`;

export const SettingsBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.8);

  &:hover {
    color: #fff;
    background: linear-gradient(133.43deg, #4d0089 0%, #235f19 102.89%);

    svg {
      fill: #fff;
      transform: rotate(30deg);
    }
  }

  &,
  svg {
    transition: all 0.2s ease;
  }

  .settings-btn:hover svg {
    fill: #fff;
    transform: rotate(30deg);
  }
`;

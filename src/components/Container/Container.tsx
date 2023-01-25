import * as React from "react";

import * as Styled from "./Container.styled";

const Container: React.FC = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

export default Container;

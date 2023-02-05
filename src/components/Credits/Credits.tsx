import * as React from "react";
import BuyMeACoffeeLogo, { BuyMeACoffeeSize } from "../BuyMeACoffeeLogo";

interface Props {
  bmacSize: BuyMeACoffeeSize;
}

const Credits: React.FC<Props> = ({ bmacSize }) => {
  return (
    <>
      {/* Copyright */}
      <p>
        <a href="https://social-comments-gpt.com/" target="_blank">
          social-comments-gpt.com
        </a>
        &nbsp;&copy;&nbsp;2022
      </p>

      {/* Buy Me a Coffee */}
      <BuyMeACoffeeLogo size={bmacSize} />

      {/* Credits */}
      <p>
        Made with &#10084;&#65039; by{" "}
        <a href="https://chcepe.github.io/" target="_blank">
          chcepe
        </a>
      </p>
    </>
  );
};

export default Credits;

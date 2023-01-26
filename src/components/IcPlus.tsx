import * as React from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  isLinear?: boolean;
}

const IcPlus = (props: Props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z"
      fill={props?.isLinear ? "url(#paint0_linear_37_12)" : "#000"}
    />
    {props?.isLinear && (
      <defs>
        <linearGradient
          id="paint0_linear_37_12"
          x1={3.5}
          y1={1.5}
          x2={18.5}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4D0089" />
          <stop offset={1} stopColor="#235F19" />
        </linearGradient>
      </defs>
    )}
  </svg>
);
export default IcPlus;

import { SVGProps } from "react";

export const ThreeDotsSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="cursor-pointer"
    width="26"
    height="6"
    viewBox="0 0 26 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="3" cy="3" r="3" fill="white" />
    <circle cx="13" cy="3" r="3" fill="white" />
    <circle cx="23" cy="3" r="3" fill="white" />
  </svg>
);

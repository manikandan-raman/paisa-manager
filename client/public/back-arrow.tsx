import { SVGProps } from "react";

export const BackArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="cursor-pointer"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.79 7.41005C18.3367 7.95678 18.3367 8.84322 17.79 9.38995L13.1799 14L17.79 18.6101C18.3367 19.1568 18.3367 20.0432 17.79 20.5899C17.2433 21.1367 16.3568 21.1367 15.8101 20.5899L10.2101 14.9899C9.66337 14.4432 9.66337 13.5568 10.2101 13.0101L15.8101 7.41005C16.3568 6.86332 17.2433 6.86332 17.79 7.41005Z"
      fill="white"
    />
  </svg>
);

import * as React from "react";

function SvgSearch(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.53 18.47l-3.66-3.66A8.98 8.98 0 0018 9a9 9 0 10-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 001.06 0 .747.747 0 00.002-1.06zM1.5 9c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5S1.5 13.135 1.5 9z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgSearch;

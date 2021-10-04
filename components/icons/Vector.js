import * as React from "react";

function SvgVector(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.89 20a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v18.5a.75.75 0 01-.75.75zm5.14 0a.75.75 0 01-.75-.75V5.89a.749.749 0 111.5 0v13.36a.75.75 0 01-.75.75zM.75 20a.75.75 0 01-.75-.75V8.973a.75.75 0 011.5 0V19.25a.75.75 0 01-.75.75z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgVector;

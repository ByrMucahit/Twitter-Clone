import * as React from "react";

function SvgNotification(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.698 14.538c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C13.873.78 12.01.01 10.006 0h-.013C7.989.01 6.127.78 4.75 2.174 3.217 3.727 2.383 5.976 2.405 8.508c.037 4.33-2.02 5.967-2.102 6.03a.75.75 0 00.447 1.353h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514a.747.747 0 00-.263-.838l.002-.001zM10 18.548a2.84 2.84 0 01-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66v-.002zM2.38 14.39c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C6.91 2.12 8.398 1.507 10 1.5c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H2.38v-.001z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgNotification;

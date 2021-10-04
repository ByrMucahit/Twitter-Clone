import * as React from "react";

function SvgHome(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#home_svg__filter0_d)" fill="currentColor">
        <path fillOpacity={0.2} d="M4 0h24v24H4z" />
        <path d="M26.46 7.57L16.357 2.115a.751.751 0 00-.713 0L5.543 7.57a.75.75 0 00.713 1.32l.815-.44L8.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304a.752.752 0 00-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H11.36c-.48 0-1.075-.216-1.178-.798L8.48 7.69 16 3.628l7.522 4.06-1.7 12.015z" />
        <path d="M12.22 12.184a3.784 3.784 0 003.78 3.78 3.784 3.784 0 003.78-3.78A3.784 3.784 0 0016 8.404a3.784 3.784 0 00-3.78 3.78zm6.06 0a2.282 2.282 0 01-2.28 2.28 2.282 2.282 0 01-2.28-2.28A2.282 2.282 0 0116 9.904a2.282 2.282 0 012.28 2.28z" />
      </g>
      <defs>
        <filter
          id="home_svg__filter0_d"
          x={0}
          y={0}
          width={32}
          height={32}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgHome;

import * as React from "react";

function SvgExploreSolid(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#explore-solid_svg__filter0_d)" fill="currentColor">
        <path fillOpacity={0.2} d="M4 0h24v24H4z" />
        <path d="M24.585 9.468c.66 0 1.2-.538 1.2-1.2 0-.662-.54-1.2-1.2-1.2h-3.22l.31-3.547a1.2 1.2 0 00-1.099-1.3c-.65-.035-1.235.432-1.293 1.093l-.326 3.754H13.9l.308-3.545a1.203 1.203 0 00-1.097-1.302 1.196 1.196 0 00-1.293 1.092l-.325 3.754h-3.33a1.2 1.2 0 000 2.4h3.122l-.44 5.064H7.416a1.202 1.202 0 000 2.402h3.22l-.31 3.548a1.205 1.205 0 001.09 1.3l.106.005c.626 0 1.14-.472 1.195-1.098l.327-3.753H18.1l-.308 3.544c-.06.658.43 1.242 1.09 1.302l.106.005c.617 0 1.142-.482 1.195-1.098l.325-3.753h3.33c.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.202-1.2-1.202h-3.122l.44-5.064h3.43l-.001-.001zm-5.838 0l-.44 5.063h-5.054l.44-5.062h5.055l-.001-.001z" />
      </g>
      <defs>
        <filter
          id="explore-solid_svg__filter0_d"
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

export default SvgExploreSolid;

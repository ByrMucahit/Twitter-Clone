import React from "react";


function Loading({size= 24, stroke=2}){
 
 return(
    <svg 
    width={size}
    height={size}
    viewBox="0 0 38 38" 
    xmlns="http://www.w3.org/2000/svg" 
    stroke="rgba(29, 161, 242, 0.1)"
    >
        <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width={stroke}>
                <circle stroke-opacity=".3" cx="18" cy="18" r="18"/>
                <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1s"
                        repeatCount="indefinite"/>
                </path>
            </g>
        </g>
    </svg>
)
}

export default Loading
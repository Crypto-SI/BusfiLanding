import type { SVGProps } from "react";

export function BusFiLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="48"
      height="48"
      {...props}
    >
      <circle cx="50" cy="50" r="50" fill="#FFD600" />
      <g transform="translate(15, 20) scale(0.7)">
        <path
          d="M84.9,39.7h-3.4V34c0-3.5-2.8-6.3-6.3-6.3H14.8c-3.5,0-6.3,2.8-6.3,6.3v27.9c0,3.5,2.8,6.3,6.3,6.3h3.4v5.7h8.5v-5.7h36.7v5.7h8.5v-5.7h3.4c2.8,0,5.1-2.3,5.1-5.1V44.8C90,41.9,87.7,39.7,84.9,39.7z M14.8,33.4h63.8c0.4,0,0.6,0.3,0.6,0.6v5.7H14.1v-5.7C14.1,33.7,14.4,33.4,14.8,33.4z M84.3,63.1H15.7c-0.4,0-0.6-0.3-0.6-0.6V45.4h69.9v17.1C84.9,62.8,84.6,63.1,84.3,63.1z"
          fill="#212121"
        />
        <circle cx="31.5" cy="54.5" r="7" fill="#212121" />
        <circle cx="68.5" cy="54.5" r="7" fill="#212121" />
        <path d="M31.5,50.5c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S33.7,50.5,31.5,50.5z" fill="#424242" />
        <path d="M68.5,50.5c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S70.7,50.5,68.5,50.5z" fill="#424242" />
        <path d="M78,41.2H22c-0.6,0-1-0.4-1-1s0.4-1,1-1h56c0.6,0,1,0.4,1,1S78.6,41.2,78,41.2z" fill="#424242" />
      </g>
    </svg>
  );
}

export function NFTIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <rect x="7" y="7" width="10" height="10" rx="2" ry="2"></rect>
            <line x1="12" y1="3" x2="12" y2="7"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
            <line x1="3" y1="12" x2="7" y2="12"></line>
            <line x1="17" y1="12" x2="21" y2="12"></line>
        </svg>
    )
}

import Link from 'next/link';

const Shape = ({ props }) => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={251.907}
        height={264.177}
        {...props}
      >
        <defs>
          <filter
            id="a"
            x={33.263}
            y={0}
            width={218.644}
            height={264.177}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={10} />
            <feGaussianBlur stdDeviation={10} result="blur" />
            <feFlood floodColor="#1d1d1d" floodOpacity={0.102} />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="b"
            x={0}
            y={87.377}
            width={141.37}
            height={164.724}
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy={10} />
            <feGaussianBlur stdDeviation={10} result="blur-2" />
            <feFlood floodColor="#1d1d1d" floodOpacity={0.102} />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g data-name="Group 111">
          <g transform="translate(-.003 -.002)" filter="url(#a)">
            <path
              data-name="Path 577"
              d="m204.256 158.304-62.2-107.733c-9.245-16.013-30.75-23.008-48.22-12.921-16.014 9.245-23.007 30.752-12.921 48.22l62.2 107.734c9.245 16.014 30.752 23.006 48.22 12.921s22.166-32.208 12.921-48.22Z"
              fill="#d4bbe7"
            />
          </g>
          <g transform="translate(.004 -.005)" filter="url(#b)" data-name="Pill">
            <path
              data-name="Path 577"
              d="m102.317 178.31-31.9-55.252a18.212 18.212 0 0 0-24.736-6.632 18.212 18.212 0 0 0-6.627 24.735l31.9 55.253a18.212 18.212 0 0 0 24.734 6.627 18.212 18.212 0 0 0 6.629-24.73Z"
              fill="#d4bbe7"
            />
          </g>
        </g>
      </svg>
  )
};

Shape.defaultProps = {};

export default Shape;

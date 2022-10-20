const HomeIcon = ({ size = 25 }) => {
  const centerContent = (size - 2) / 8;
  const scale = '0.9';
  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`translate(${centerContent},${centerContent}) scale(${scale})`}
      >
        <path d="m1.5 10.5 9-9 9 9" />
        <path d="M3.5 8.5v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
      </g>
    </svg>
  );
};

export default HomeIcon;

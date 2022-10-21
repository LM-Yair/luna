const CrossIcon = ({ size = 25 }) => {
  const centerContent = (size - 2) / 12;
  const scale = "0.85";
  return (
    <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`translate(${centerContent},${centerContent}) scale(${scale})`}
      >
        <path d="m15.5 15.5-10-10zM15.5 5.5l-10 10" />
      </g>
    </svg>
  );
};

export default CrossIcon;

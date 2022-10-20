const SearchIcon = ({ size = 25 }) => {
  const centerContent = (size - 2) / 8;
  const scale = '0.95';
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
        <circle cx={8.5} cy={8.5} r={5} />
        <path d="M17.571 17.5 12 12" />
      </g>
    </svg>
  );
};

export default SearchIcon;

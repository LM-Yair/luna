const ArrowLeft = ({ size = 25 }) => {
  const centerContent = (size - 2) / 12;
  const scale = "1";
  return (
    <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg">
      <path
        d="m11.5 14.5-4-4 4-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform={`translate(${centerContent},${centerContent}) scale(${scale})`}
      />
    </svg>
  );
};

export default ArrowLeft;

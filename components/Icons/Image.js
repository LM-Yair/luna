const ImageIcon = ({ size = 25 }) => {
  const centerContent = (size - 2) / 4;
  const scale = "1.5";
  return (
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-inherit"
    >
      <g
        fill="none"
        fillRule="evenodd"
        transform={`translate(${centerContent},${centerContent}) scale(${scale})`}
      >
        <g>
          <path d="M2.5.5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z" />
          <path d="m14.5 10.5-3-3-3 2.985M12.5 14.5l-9-9-3 3" />
        </g>
        <circle cx={11} cy={4} r={1} />
      </g>
    </svg>
  );
};

export default ImageIcon;

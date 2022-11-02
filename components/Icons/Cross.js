const CrossIcon = ({ size = 25 }) => {
  const scale = "0.6";
  return (
    <svg
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
      style={{
        enableBackground: "new 0 0 490 490",
      }}
      xmlSpace="preserve"
      transform={`scale(${scale})`}
    >
      <path d="M11.387 490 245 255.832 478.613 490l10.826-10.826-233.63-234.178 233.63-234.185L478.613 0 245 234.161 11.387 0 .561 10.811l233.63 234.185L.561 479.174z" />
    </svg>
  );
};

export default CrossIcon;

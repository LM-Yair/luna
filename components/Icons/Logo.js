import Image from "next/image";

const Logo = ({ size = 30, priorityimg = false }) => {
  return (
    <Image
      className="bg-neutral-800 rounded-full"
      width={size}
      height={size}
      priority={priorityimg}
      src="/logo.png"
      alt="icon"
    />
  );
};

export default Logo;

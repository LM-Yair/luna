import Image from "next/image";

const AvatarImage = ({ avatar, size = 25, alt }) => {
  return (
    <>
      <Image
        className="rounded-full"
        src={avatar}
        width={size}
        height={size}
        alt={alt ? alt : "User avatar"}
      />
    </>
  );
};

export default AvatarImage;

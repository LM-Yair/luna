const AvatarImage = ({ avatar, size = 25, alt }) => {
  return (
    <>
      <img
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

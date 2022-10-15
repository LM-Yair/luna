const Avatar = ({ avatar, avatarSize = 25, name }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {avatar && (
        <img
          className="rounded-full"
          src={avatar}
          width={avatarSize}
          height={avatarSize}
          alt="User avatar"
        />
      )}
      {name && <span className="text-xl">{name}</span>}
    </div>
  );
};

export default Avatar;

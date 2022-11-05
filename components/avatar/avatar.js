import AvatarImage from "./avatarImage";
import AvatarName from "./avatarName";

const Avatar = ({ avatar, avatarSize = 25, name }) => {
  return (
    <div className="inline-flex items-center justify-center flex-wrap gap-2">
      {avatar && <AvatarImage avatar={avatar} size={avatarSize} alt={name} />}
      {name && <AvatarName name={name} />}
    </div>
  );
};

export default Avatar;

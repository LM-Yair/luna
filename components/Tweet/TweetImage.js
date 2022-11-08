const TweetImage = ({ idToAction, src, alt = "image" }) => {
  return (
    <img
      id={idToAction}
      className="w-full h-auto cursor-pointer"
      src={src}
      alt={alt}
    />
  );
};

export default TweetImage;

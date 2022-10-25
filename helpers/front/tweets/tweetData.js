export const filterTweetData = (id, data = {}) => {
  const { message, image } = data.content;
  const date = data.date.seconds || data.date._seconds;
  return {
    id,
    uid: data.uid, // user id
    name: data.name,
    avatar: data.avatar,
    at: data.at,
    date: date * 1000,
    content: {
      message,
      image: {
        status: image.status,
        path: image.path,
      },
    },
  };
};


const ButtonSend = ({ form }) => {
  if (form.message.trim().length > 0 || form.image.status ) {
    return (
      <input
        className="text-neutral-300 py-2 px-4 bg-neutral-800 rounded-xl cursor-pointer"
        type="submit"
        value={"Share"}
      />
    );
  }
  return (
    <input
      className="text-neutral-300 py-2 px-4 bg-neutral-800 rounded-xl cursor-pointer"
      type="submit"
      value={"Share"}
      disabled={true}
    />
  );
};

export default ButtonSend;

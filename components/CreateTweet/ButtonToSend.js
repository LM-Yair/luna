import { IMAGE_STATE } from "CONSTANTS/IMAGE_STATES";

const ButtonSend = ({ form }) => {
  const { message, image } = form;
  const hasMessage = message.trim().length > 0;
  const hasImage = ![
    IMAGE_STATE.IS_LOADING,
    IMAGE_STATE.NOT_IMG,
    IMAGE_STATE.ERROR,
  ].includes(image.status);

  if (hasMessage || hasImage) {
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

import CrossIcon from "components/Icons/Cross";
import ImageIcon from "components/Icons/Image";
import Loader from "components/Loader/Loader";
import { IMAGE_STATE } from "CONSTANTS/IMAGE_STATES";

const ImageTweet = ({ form, setImage, resetImage }) => {
  const handleLoadImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const allowFiles = ["image/png", "image/jpg", "image/jpeg"];
    if (!allowFiles.includes(file.type)) return;

    reader.addEventListener("error", resetImage);
    reader.addEventListener("loadstart", () => {
      setImage({
        status: IMAGE_STATE.IS_LOADING,
      });
    });
    reader.addEventListener("loadend", () => {
      const { name, type } = file;
      setImage({
        status: IMAGE_STATE.OK,
        data: file,
        preview: reader.result,
        type,
        name,
      });
    });
    file && reader.readAsDataURL(file);
  };
  if (form.image.status === IMAGE_STATE.IS_LOADING) {
    return (
      <div className="w-[50px] h-[60px] flex items-center justify-center">
        <Loader size={50} />
      </div>
    );
  }
  if (form.image.status === IMAGE_STATE.OK) {
    return (
      <div className="w-[50px] h-[60px] rounded-xl flex items-center relative overflow-hidden">
        <div
          onClick={resetImage}
          className="w-[20px] h-[20px] flex items-center justify-center absolute z-10 top-0 right-0 rounded-full bg-neutral-100 cursor-pointer scale-90"
        >
          <CrossIcon size={18} />
        </div>
        <img className="w-full h-auto" src={form.image.preview} />
      </div>
    );
  }
  return (
    <div className="w-[50px] h-[60px] stroke-blue-500/50 hover:stroke-blue-500 relative">
      <ImageIcon size={50} />
      <input
        className="w-[50px] h-[60px] absolute z-20 left-0 top-0 opacity-0"
        onChange={handleLoadImage}
        type="file"
      />
    </div>
  );
};

export default ImageTweet;

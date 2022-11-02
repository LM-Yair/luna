import AvatarImage from "components/avatar/avatarImage";
import ModalContext from "context/Modal";
import { useContext } from "react";

const HomeHeader = ({ user }) => {
  const { handlerModal } = useContext(ModalContext);
  return (
    <header className="p-2 sticky top-0 left-0 flex justify-between bg-neutral-200/75 backdrop-blur-sm">
      <div
        onClick={handlerModal}
        className="w-[35px] cursor-pointer rounded-full flex items-center justify-center hover:bg-neutral-300"
      >
        <AvatarImage avatar={user.avatar} alt={user.name} size={35} />
      </div>
      <div className="w-full flex items-center">
        <h2 className="text-xl font-bold ml-2">Home</h2>
      </div>
      <div className="w-16 flex items-center justify-center"></div>
    </header>
  );
};

export default HomeHeader;

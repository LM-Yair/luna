import { useContext } from "react";
import CrossIcon from "components/Icons/Cross";
import ModalContext from "context/Modal";

const Modal = ({ children }) => {
  const { handlerModal, modalIsOpen } = useContext(ModalContext);
  const viewModal = modalIsOpen
    ? "fixed top-0 left-0 z-40"
    : "invisible hidden";
  return (
    <div
      className={`h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-800/25 ${viewModal}`}
    >
      <div className="p-2 h-full w-full max-w-md relative overflow-x-hidden bg-neutral-200 md:max-w-[25rem] md:shadow-xl md:rounded-xl md:max-h-[40rem]">
        <div className="flex justify-end">
          <div
            onClick={handlerModal}
            className="p-1 flex justify-center items-center cursor-pointer hover:bg-neutral-800/25 rounded-full"
          >
            <CrossIcon size={20} />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

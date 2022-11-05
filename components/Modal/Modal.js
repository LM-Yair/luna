import { useContext } from "react";
import CrossIcon from "components/Icons/Cross";
import ModalContext from "context/Modal";

const Modal = ({ children }) => {
  const { closeModal, modalIsOpen } = useContext(ModalContext);
  const viewModal = modalIsOpen
    ? "fixed top-0 left-0 z-40"
    : "invisible hidden";
  return (
    <div
      className={`h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-800/25 z-40 ${viewModal}`}
    >
      <div className="h-full w-full max-w-md relative flex flex-col justify-between overflow-x-hidden bg-neutral-200 md:max-w-[25rem] md:shadow-xl md:rounded-xl md:max-h-[40rem]">
        <div className="sticky top-0 left-0 flex justify-end bg-neutral-200/75 backdrop-blur-sm">
          <div
            onClick={closeModal}
            className="p-2 flex justify-center items-center cursor-pointer hover:bg-neutral-800/25 rounded-full"
          >
            <CrossIcon size={20} />
          </div>
        </div>
        <div className="grow">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

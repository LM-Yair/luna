import { createContext, useContext, useEffect, useState } from "react";
import ModalContext from "./Modal";

const FileViewerContext = createContext();

const FileViewerProvider = ({ children }) => {
  const { openModal, modalIsOpen } = useContext(ModalContext);
  const [file, setFile] = useState(null);

  const addFileData = (file) => {
    setFile(file);
    openModal();
  };

  const removeFileData = () => {
    setFile(null);
  };

  useEffect(() => {
    if (!modalIsOpen) removeFileData();
  }, [modalIsOpen]);

  const value = { file, addFileData };
  return (
    <FileViewerContext.Provider value={value}>
      {children}
    </FileViewerContext.Provider>
  );
};

export default FileViewerContext;
export { FileViewerProvider };

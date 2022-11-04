import { useContext } from "react";

import Modal from "components/Modal/Modal";
import FileViewerContext from "context/FileViewer";

const ImageViewer = () => {
  const { file } = useContext(FileViewerContext);
  return (
    <Modal>
      {file && (
        <div className="min-h-full flex items-center">
          <img className="w-full" src={file.src} alt={file.alt} />
        </div>
      )}
    </Modal>
  );
};

export default ImageViewer;

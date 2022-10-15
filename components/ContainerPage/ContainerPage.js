// import Header from "components/Header/Header";
// import Footer from "components/Footer/Footer";
import { containerPage } from "./containerPage.module.css";

const ContainerPage = ({ children }) => {
  return (
    <div
      className={`h-screen bg-neutral-100 flex items-center justify-center overflow-hidden ${containerPage}`}
    >
      <main className="h-full w-full max-w-md relative overflow-x-hidden bg-neutral-200 md:max-w-[25rem] md:shadow-xl md:rounded-xl md:max-h-[40rem]">
        {children}
      </main>
    </div>
  );
};

export default ContainerPage;

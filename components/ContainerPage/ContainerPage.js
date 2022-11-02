import { background_desing } from "./containerPage.module.css";

const ContainerPage = ({ children }) => {
  return (
    <div
      className={`h-screen w-full flex  items-center justify-center overflow-hidden bg-neutral-100 ${background_desing}`}
    >
      <main className="h-full w-full max-w-md relative overflow-x-hidden bg-neutral-200 md:max-w-[25rem] md:shadow-xl md:rounded-xl md:max-h-[40rem]">
        {children}
      </main>
    </div>
  );
};

export default ContainerPage;

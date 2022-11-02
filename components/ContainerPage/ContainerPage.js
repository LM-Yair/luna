import { containerPage } from "./containerPage.module.css";

const ContainerPage = ({ children }) => {
  const mainTagClass = [
    "h-full",
    "w-full",
    "max-w-md",
    "relative",
    "overflow-x-hidden",
    "bg-neutral-200",
    "md:max-w-[25rem]",
    "md:shadow-xl",
    "md:rounded-xl",
    "md:max-h-[40rem]",
  ].join(" ");
  return (
    <div
      className={`h-screen bg-neutral-100 flex items-center justify-center overflow-hidden ${containerPage}`}
    >
      <main className={mainTagClass}>{children}</main>
    </div>
  );
};

export default ContainerPage;

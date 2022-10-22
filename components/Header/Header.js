import ArrowLeft from "components/Icons/ArrowLeft";
import { useRouter } from "next/router";

const Header = ({ pageName = "" }) => {
  const router = useRouter();
  // const goToBack = () => router.back();
  const goToBack = () => {
    const urls = Object.keys( router.components );
    if(urls.length === 0){
      router.replace('/');
    }
    router.back();
  };
  return (
    <header className="p-2 sticky top-0 left-0 flex justify-between bg-neutral-200/75 backdrop-blur-sm">
      <div className="flex items-center justify-center">
        <div
          className="p-2 rounded-full cursor-pointer hover:bg-neutral-400/50"
          onClick={goToBack}
        >
          <ArrowLeft />
        </div>
      </div>
      <div className="w-full flex items-center">
        <h2 className="text-xl ml-2">{pageName}</h2>
      </div>
      <div className="w-16 flex items-center justify-center"> </div>
    </header>
  );
};

export default Header;

const Header = ({ btn = false, onClick, pageName = "" }) => {
  return (
    <header className="p-2 sticky top-0 left-0 flex justify-between bg-neutral-200/75 backdrop-blur-sm">
      <div className="w-16 flex items-center justify-center">{"<-"}</div>
      <div className="w-full flex items-center">
        <h2 className="text-xl font-bold ml-2">{pageName}</h2>
      </div>
      <div className="w-16 flex items-center justify-center">
        {button && (
          <button
            className="text-neutral-300 p-2 bg-neutral-800"
            onClick={onClick}
          >
            {btn}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

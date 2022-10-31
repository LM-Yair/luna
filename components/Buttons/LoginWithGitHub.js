import GitHub from "components/Icons/GitHub";

const LoginWithGitHub = ({handleClick}) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center text-neutral-100 p-2 m-2 bg-neutral-900 rounded-xl"
    >
      <div className="mr-2">
        <GitHub />
      </div>
      Login with GitHub
    </button>
  );
};

export default LoginWithGitHub;

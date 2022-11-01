import Google from "components/Icons/Google";

const LoginWithGoogle = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="flex items-center text-neutral-100 p-2 m-2 bg-neutral-900 rounded-xl"
    >
      <div className="mr-2">
        <Google />
      </div>
      Login with Google
    </button>
  );
};

export default LoginWithGoogle;

import { loader } from "./Loader.module.css";

const Loader = ({ size = 25 }) => {
  return <svg width={size} height={size} className={loader}></svg>;
};

export default Loader;

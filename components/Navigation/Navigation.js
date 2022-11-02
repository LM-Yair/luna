import Link from "next/link";

import HomeIcon from "components/Icons/Home";
import SearchIcon from "components/Icons/Search";
import CreateTweet from "components/Icons/CreateTweet";

const Navigation = () => {
  const iconClass = "p-2 hover:bg-blue-300/75 rounded-full";
  const navTagClass = [
    "p-2",
    "h-12",
    "w-full",
    "sticky",
    "left-0",
    "bottom-0",
    "flex",
    "items-center",
    "justify-around",
    "bg-neutral-200",
  ].join(" ");
  return (
    <nav className={navTagClass}>
      <Link href="/home">
        <a className={iconClass}>
          <HomeIcon size={25} />
        </a>
      </Link>
      <Link href="/home">
        <a className={iconClass}>
          <SearchIcon size={25} />
        </a>
      </Link>
      <Link href="/compose/tweet">
        <a className={iconClass}>
          <CreateTweet size={25} />
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;

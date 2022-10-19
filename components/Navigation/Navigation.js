import Link from "next/link";

import HomeIcon from "components/Icons/Home";
import MessageIcon from "components/Icons/Message";
import NotificationIcon from "components/Icons/Notification";
import SearchIcon from "components/Icons/Search";

const Navigation = () => {
  return (
    <nav className="p-2 h-12 w-full bg-neutral-200 flex justify-evenly items-center sticky left-0 bottom-0 md:bottom-0">
      <Link href="/home">
        <a className="p-2">
          <HomeIcon size={25} />
        </a>
      </Link>
      <Link href="/home">
        <a className="p-2">
          <SearchIcon size={25} />
        </a>
      </Link>
      <Link href="/home">
        <a className="p-2">
          <NotificationIcon size={25} />
        </a>
      </Link>
      <Link href="/home">
        <a className="p-2">
          <MessageIcon size={25} />
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;

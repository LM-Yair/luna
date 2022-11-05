import Avatar from "components/avatar/avatar";
import Action from "components/Buttons/Action";
import Logout from "components/Icons/Logout";
import Modal from "components/Modal/Modal";
import { logOut } from "Firebase/auth/loginState";
import Link from "next/link";

const UserMenu = ({ user }) => {
  return (
    <Modal>
      <Link href={"/profile"}>
        <a className='p-2 flex justify-center items-center hover:bg-neutral-800/25'>
          <Avatar avatar={user.avatar} name={user.name} avatarSize={35} />
        </a>
      </Link>
      <div className="p-4">
        <Action Icon={Logout} title="LOGOUT" action={logOut} />
      </div>
    </Modal>
  );
};

export default UserMenu;

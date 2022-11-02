import Avatar from "components/avatar/avatar";
import Action from "components/Buttons/Action";
import Logout from "components/Icons/Logout";
import Modal from "components/Modal/Modal";
import { logOut } from "Firebase/auth/loginState";

const UserMenu = ({ user }) => {
  return (
    <Modal>
      <Avatar avatar={user.avatar} name={user.name} avatarSize={35} />
      <div className="p-4">
        <Action Icon={Logout} title="LOGOUT" action={logOut} />
      </div>
    </Modal>
  );
};

export default UserMenu;

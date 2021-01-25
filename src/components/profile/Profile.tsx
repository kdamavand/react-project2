import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";

export const Profile = () => {
  const [authUser, setAuthUser] = useContext(UserContext);
  return (
    <a>
      <img
        className="img-profile"
        src="https:/thispersondoesnotexist.com/image"
      ></img>
      {authUser.username}
    </a>
  );
};

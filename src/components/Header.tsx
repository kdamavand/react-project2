import Logotype from "./../shared/images/logo.svg";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./../shared/provider/UserProvider";
import { Profile } from "./../components/profile/Profile";
export const Header = () => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);
  const display = () => {
    return authUser?.username ? (
      <Profile />
    ) : (
      <a onClick={() => history.push("/login")}>Login</a>
    );
  };

  return (
    <>
      <header>
        <img className="logo" src={Logotype} alt={""} />
        <div className="topnav">
          {display()}
          <a onClick={() => history.push("/contact")}>Contact</a>
          <a onClick={() => history.push("/about")}>About</a>
          <a className="active" onClick={() => history.push("/home")}>
            Home
          </a>
        </div>
      </header>
      <div className="left"></div>
    </>
  );
};

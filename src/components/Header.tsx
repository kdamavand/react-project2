import Logotype from "./../shared/images/logo.svg";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./../shared/provider/UserProvider";
import { Profile } from "./../components/profile/Profile";
import RoutingPath from "./../routes/RoutingPaths";

// Types
import { CartItemType } from "../view/HomeView";

export const Header = () => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);
  const display = () => {
    return authUser?.username ? (
      <Profile />
    ) : (
      <a onClick={() => history.push(RoutingPath.loginPath)}>Login</a>
    );
  };

  return (
    <>
      <header>
        <img className="logo" src={Logotype} alt={""} />
        <div className="topnav">
          <a className="active" onClick={() => history.push("/home")}>
            Home
          </a>
          {display()}
        </div>
      </header>

      <div className="left"></div>
    </>
  );
};

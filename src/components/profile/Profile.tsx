import { useContext } from "react";
import { UserContext } from "../../shared/provider/UserProvider";
import { useHistory } from "react-router-dom";
import RoutingPaths from "../../routes/RoutingPaths";


export const Profile = () => {
  const [authUser, setAuthUser] = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    setAuthUser(false);
    history.push(RoutingPaths.homePath);
  };
  return (
    <div className='profile'>
      <a>
      <img
        className="img-profile"
        src="https:/thispersondoesnotexist.com/image"
        title={authUser.username}
      ></img>
      {authUser.username === "" ? (
        authUser.username
      ) : (
  
          <span onClick={() => logout()}>Logout</span>
 
      )}
    </a>
    </div>
  );
};

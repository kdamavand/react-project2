import { useState, useContext } from "react";
import { UserContext } from "../shared/provider/UserProvider";
import { LoginCredentials } from "./../interfaces/LoginCredentials";
import { useHistory } from "react-router-dom";
import RoutingPath from "./../routes/RoutingPaths";

export const LoginView = () => {
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const login = () => {
    localStorage.setItem("user", loginCredentials.username);
    setAuthUser(loginCredentials);
    history.push(RoutingPath.homePath);
  };

  return (
    <div>
      <h1>{loginCredentials.username}</h1>
      <form className="add-form">
        <div className="form-control">
          <label>username:</label>
          <input
            type="text"
            onChange={(event) =>
              setLoginCredentials({
                ...loginCredentials,
                username: event.target.value,
              })
            }
          />
        </div>
        <div className="form-control">
          <label>password:</label>
          <input
            type="password"
            onChange={(event) =>
              setLoginCredentials({
                ...loginCredentials,
                password: event.target.value,
              })
            }
          />
          <button className="btn" onClick={() => login()}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

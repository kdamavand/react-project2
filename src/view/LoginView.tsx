import { useState, useContext } from "react";
import { useQuery } from "react-query";
import { UserContext } from "../shared/provider/UserProvider";
import { LoginCredentials } from "./../interfaces/LoginCredentials";
import { useHistory } from "react-router-dom";
import RoutingPath from "./../routes/RoutingPaths";

export type UserType = {
  id: number;
  username: string;
  password: string;
  age: number;
};

//export const GetProducts = async (): Promise<CartItemType[]> =>
//  await (await fetch("https://fakestoreapi.com/products")).json();
export const GetUsers = async (): Promise<UserType[]> =>
  await (await fetch("http://localhost:8080/api/users")).json();

export const LoginView = () => {
  const { data } = useQuery<UserType[]>("users", GetUsers);
  const history = useHistory();
  const [authUser, setAuthUser] = useContext(UserContext);
  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const login = () => {
    const user = data?.find(user => (user.username === loginCredentials.username && user.password ===loginCredentials.password) )
    if(user){
      localStorage.setItem("user", loginCredentials.username);
      setAuthUser(loginCredentials);
      history.push(RoutingPath.homePath);
    }else{
      console.log("user not found");
    }
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
            type="text"
            name="password"
            required
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

import React, { useContext } from "react";
import { types } from "../../types/types";
import { AuthContext } from "../../auth/AuthContext";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const lastPath = localStorage.getItem("lastPath") || "/";

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: { name: "Juan David" },
    });

    //history.push('/') //Conserve un historial de navegación
    history.replace(lastPath); //No conserva historial de navegación
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

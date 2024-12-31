import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function WithAuth(WrapperComponent) {
  const WithAuthComponent = (props) => {
    const navigate = useNavigate();
    const isAuth = false;

    useEffect(() => {
      if (!isAuth) {
        navigate("/");
      }
    }, [isAuth]);

    return isAuth ? <WrapperComponent {...props} /> : <div>Login first</div>;
  };

  return WithAuthComponent;
}

export default WithAuth;

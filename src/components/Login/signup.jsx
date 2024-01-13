import PageSwitchAni from "../transitionAnimation/pageAni";
import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";
import React from "react";

import { useNavigate } from "react-router-dom";

function LoginSignup({ setIsAuth }) {
  const navigate = useNavigate();

  const signUp = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="h-[20rem] flex items-center justify-center">
      <PageSwitchAni />

      <button className="text-2xl" onClick={signUp}>
        Sign in with google
      </button>
    </div>
  );
}

export default LoginSignup;

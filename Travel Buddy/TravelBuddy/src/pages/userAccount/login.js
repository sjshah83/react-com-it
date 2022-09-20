import "../../css/Login.css";
import React from "react";
import { ModalHeader, ModalLoginForm, ModalFooter } from "./Login.jsx"

export const Login = () => {
  return (
    <div className="my-body-background">
      <div className="my-modal">
        <div className="my-modal-inner">
          <ModalHeader />
          <ModalLoginForm />
          <ModalFooter />
        </div>
      </div>
    </div>
  );
};

export default Login;
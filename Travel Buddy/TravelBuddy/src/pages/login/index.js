import "../../css/Login.css";
import React from "react";
import { ModalHeader, ModalLoginForm, ModalFooter } from "../login/Login.jsx"

export const Login = () => {
  return (
    <div className="bodyBackground">
      <div class="modal">
        <div class="modal-inner">
          <ModalHeader />
          <ModalLoginForm />
          <ModalFooter />
        </div>
      </div>
    </div>
  );
};

export default Login;
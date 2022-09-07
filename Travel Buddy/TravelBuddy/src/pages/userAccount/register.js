import "../../css/Login.css";
import React from "react";
import { ModalHeader, ModalFooter ,ModalRegisterForm} from "./Register.jsx"

export const Register = () => {
  return (
    <div className="bodyBackground">
      <div class="modal">
        <div class="modal-inner">
          <ModalHeader />
          <ModalRegisterForm />
          <ModalFooter />
        </div>
      </div>
    </div>
  );
};

export default Register;
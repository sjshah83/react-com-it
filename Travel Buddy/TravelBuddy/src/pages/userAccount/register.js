import "../../css/Login.css";
import React from "react";
import { ModalHeader, ModalFooter ,ModalRegisterForm} from "./Register.jsx"

export const Register = () => {
  return (
    <div className="my-body-background">
      <div class="my-modal">
        <div class="my-modal-inner">
          <ModalHeader />
          <ModalRegisterForm />
          <ModalFooter />
        </div>
      </div>
    </div>
  );
};

export default Register;
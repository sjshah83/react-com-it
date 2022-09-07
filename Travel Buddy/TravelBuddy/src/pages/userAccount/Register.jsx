import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ModalHeader = () => {
    return (

        <div class="modal-top">
            <div class="modal-title">Register Yourself to Travel Buddy</div>
            <button class="modal-close" type="button">
                <span class="material-icons">close</span>
            </button>
        </div>

    );
};

const ModalFooter = () => {
    return (

        <div class="modal-bottom">
            New to Travel Buddy?&nbsp;
            <a href="register.html" class="blue-link">Create an account</a>
        </div>

    );
};

const ModalRegisterForm = () => {

    const userName = useRef(null);
    const userPasswd = useRef(null);
    let navigate = useNavigate();

    let handleRegister = () => {
        alert("Registration successfull");
    };

    return (

        <div class="modal-content">
            <h1>Register Yourself</h1>
        </div>

    );
};

export { ModalHeader, ModalRegisterForm, ModalFooter };
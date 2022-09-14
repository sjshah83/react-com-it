import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const ModalHeader = () => {
    let navigate = useNavigate();
    let handleClose = () => {
        navigate("/");
    };
    return (
        <div class="modal-top">
            <div class="modal-title">Register Yourself to Travel Buddy</div>
            <button class="modal-close" type="button" onClick={handleClose}>
                <span class="material-icons">close</span>
            </button>
        </div>

    );
};

const ModalFooter = () => {
    return (

        <div class="modal-bottom">
            Already have a TravelBuddy account?&nbsp;
            <Link to="/login" className="blue-link">Log In</Link>
            Into your account
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
            
            <form class="full-width">
                <input name="fname" type="text" class="input-style" placeholder="First name" maxlength="200" value="" required/>
                <input name="last_name" type="text" class="input-style" placeholder="Last name" maxlength="200" value="" required/>
                <input name="email" type="email" class="input-style" placeholder="Email" maxlength="100" value="" required/>
                <input name="password" type="password" class="input-style" placeholder="Password" value="" required/>
                <button type="submit" class="modal-button2">
                    <span class="ps-button-text ellipsis">Sign up</span>
                </button>

            </form>



        </div>

    );
};

export { ModalHeader, ModalRegisterForm, ModalFooter };
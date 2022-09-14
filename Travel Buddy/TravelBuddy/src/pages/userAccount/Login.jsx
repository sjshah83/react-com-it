import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const ModalHeader = () => {
    let navigate = useNavigate();
    let handleClose = () => {
        navigate("/");
    };
    return (

        <div class="modal-top">
            <div class="modal-title">Sign-In To Travel Buddy</div>
            <button class="modal-close" type="button" onClick={handleClose}>
                <span class="material-icons">close</span>
            </button>
        </div>

    );
};

const ModalFooter = () => {
    return (

        <div class="modal-bottom">
            New to Travel Buddy?&nbsp;
            <Link to="/register" className="blue-link">Register Yourself</Link>
        </div>

    );
};

const ModalLoginForm = () => {

    const userName = useRef(null);
    const userPasswd = useRef(null);
    let navigate = useNavigate();

    let handleLogin = () => {
        if (userName.current.value === "abs@gmail.com" && userPasswd.current.value === "123") {
            navigate("/dashboard");
        } else {
            alert("Not valid username or password");
        }
    };

    return (

        <div class="modal-content">
            <form class="full-width" >
                <input
                    name="username"
                    type="text"
                    class="input-style"
                    placeholder="Email or username"
                    maxlength="200"
                    required
                    ref={userName}
                />

                <input
                    required
                    name="password"
                    type="password"
                    class="input-style"
                    placeholder="Password"
                    autocomplete="new-password"
                    ref={userPasswd}
                />

                <button type="submit" class="modal-button2" onClick={handleLogin}>
                    Sign in
                </button>
            </form>
        </div>

    );
};

export { ModalHeader, ModalLoginForm, ModalFooter };
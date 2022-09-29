import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const ModalHeader = () => {
    let navigate = useNavigate();
    let handleClose = () => {
        navigate("/");
    };
    return (

        <div class="my-modal-top">
            <div class="my-modal-title">Sign-In To Travel Buddy</div>
            <button class="my-modal-close" type="button" onClick={handleClose}>
                <span class="material-icons">close</span>
            </button>
        </div>

    );
};

const ModalFooter = () => {
    return (

        <div class="my-modal-bottom">
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
            navigate("/dashboard/menu");
        } else {
            alert("Not valid username or password");
        }
    };

    return (

        <div class="my-modal-content">
            <form class="full-width" >
                <input
                    name="username"
                    type="text"
                    class="input-style"
                    placeholder="Email or username"
                    maxLength="200"
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

                <button type="submit" class="my-modal-button2" onClick={handleLogin}>
                    Sign in
                </button>
            </form>
        </div>

    );
};

export { ModalHeader, ModalLoginForm, ModalFooter };
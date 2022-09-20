import React from "react";
import { Link } from "react-router-dom"

export const HomePage = () => {
    const my_login_button={
        textDecoration: "none",
        fontFamily: "Label",
        fontSize: "1.5em",
        lineHeight: "1em",
        color: "#e0844eec",
        padding: "0.5em 2em",
        borderRadius: "30px",
        border: "5px solid #e0844eec",
        background: "#ffffff",
        cursor: "pointer",
        /*-webkit-transition: 0.2s all ease-in-out;*/
        position: "relative",
        // top: "1em",
        marginRight:"2px",
    }    
    const my_register_button={
        textDecoration: "none",
        fontFamily: "Label",
        fontSize: "1.8em",
        lineHeight: "1.2em",
        color: "#ffffff",
        padding: "1em 3em",
        borderRadius: "30px", 
        background: "#ffffff",
        cursor: "pointer",
        position: "relative",
        // top: "1em",
        backgroundImage: "linear-gradient(120deg,#e0844eec 0%,#52419c 78%,#402a72 100%)",
    
    }
    const my_headerLinks={
        verticalAlign: "middle",
        margin:"1em",
    }
    return (
        <div className="my-body-background">
            <nav className="my-nav">
                <div className="my-headerWrap">
                    <div className="my-logo">
                        <img src={require('../../images/travelbuddy.png')} alt="travelBuddy-Logo" />
                    </div>
                    <div style={my_headerLinks}>
                        <Link to="/login" style={my_login_button}>Login</Link>
                        <Link to="/register" style={my_register_button}>Register Yourself</Link>
                    </div>
                </div>
            </nav>

            <section className="my-section">
                <h1 className="my-heading">
                    Your Own Travel Buddy Online
                </h1>
                <div class="my-container">
                    <div class="my-banner-wrap">
                        <h2 class="my-banner-heading">
                            Explore. Plan. Create. Inspire.
                        </h2>
                        <p class="my-banner-subinfo">
                            Your own travel buddy online to help create and preserve your travel
                            experiance.
                        </p>
                        <p class="my-banner-subinfo">
                            Your own travel buddy online to help create and preserve your travel
                            experiance. Don<span>&#39;</span>t let beautiful memories fade.
                            Create your own travel journal and share pictures.Create an account
                            and start today!
                        </p>
                    </div>
                </div>
            </section>

            <footer className="my-footer">
                <p>&copy; 2022 Travel Buddy - Your partner for traveling.</p>
            </footer>
        </div>
    );
};

export default HomePage;
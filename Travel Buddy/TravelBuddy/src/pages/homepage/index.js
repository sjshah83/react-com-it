import React from "react";
import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <div className="my-body-background">
            <nav className="my-nav">
                <div className="my-headerWrap">
                    <div className="my-logo">
                        <img src={require('../../images/travelbuddy.png')} alt="travelBuddy-Logo" />
                    </div>
                    <div className="my-headerLinks">
                        <Link to="/login" class="my-login-button">Login</Link>
                        <Link to="/register" class="my-register-button">Register Yourself</Link>
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
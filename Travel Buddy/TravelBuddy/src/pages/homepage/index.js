import React from "react";

export const HomePage= ()=>{
    return(
        <div>
            <nav>
                <div class="headerWrap">
                    <div class="logo">
                        <img src={require('../../images/travelbuddy.png')} alt="travelBuddy-Logo" />
                    </div>
                    <div class="headerLinks">
                        <a href="{login.html}" class="login">
                            Login
                        </a>
                        <a href="register.html" class="register">
                            Register Yourself
                        </a>
                    </div>
                </div>
            </nav>

            <section>
                <h1>
                    Your Own Travel Buddy Online
                </h1>
                <div class="container">
                    <div class="banner-wrap">
                        <h2 class="banner-heading">
                            Explore. Plan. Create. Inspire.
                        </h2>
                        <p class="banner-subinfo">
                            Your own travel buddy online to help create and preserve your travel
                            experiance.
                        </p>
                        <p class="banner-subinfo">
                            Your own travel buddy online to help create and preserve your travel
                            experiance. Don<span>&#39;</span>t let beautiful memories fade.
                            Create your own travel journal and share pictures.Create an account
                            and start today!
                        </p>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2022 Travel Buddy - Your partner for traveling.</p>
            </footer>
        </div>
    );
} ;

export default HomePage ;
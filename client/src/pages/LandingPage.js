import React from "react";
import { Link } from "react-router-dom";

import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";

const LandingPage = () => (
  <div className="u-center-flex" style={{ overflow: "hidden" }}>
    <main className="welcome">
      <div className="welcome__logo">
    
      </div>
      <Link to="/signup" className="btn btn--signup">
        Signup
      </Link>
      <Link to="/login" className="btn btn--login">
        Login
      </Link>
      <a
        href="https://github.com/Missi3223/React-Book-Search"
        className="github"
        target="_blank"
      >
        <svg>
          <use xlinkHref="/images/sprite.svg#icon-github" />
        </svg>
      </a>
    </main>
  </div>
);

export default LandingPage;
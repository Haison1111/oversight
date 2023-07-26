import React from "react";
import { loginEndpoint } from "../../spotify";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className="logo"
      />
      <a href={loginEndpoint}>
        <div className="login-btn">LOG IN</div>
      </a>
      <div className="login-account">
        <h3>
          {" "}
          <span> Important!</span> Please use this accounts below to login to
          show data.
        </h3>
        <p>
          {" "}
          Email:<span> bdhs1105@gmail.com </span>{" "}
        </p>
        <p>
          {" "}
          password :<span> 12345678@ </span>{" "}
        </p>
        <p>
          {" "}
          if you already login your spotify account on this brower. Log out and
          login using this account.{" "}
        </p>
      </div>
    </div>
  );
}

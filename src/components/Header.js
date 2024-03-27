import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

function Header() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  });
  async function Logout(e) {
    e.preventDefault();
    await fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    toast.error("You Are Logged Out");
  }

  const username = userInfo?.username;
  return (
    <header>
      <a href="/" className="logo">
        <img src="logo.png" width={150} alt="logo" />
      </a>
      <nav>
        {username && (
          <>
            <Link to="/create">Create Post</Link>
            <a href="#" className="logout" onClick={Logout}>
              Logout
            </a>
          </>
        )}
        {!username && (
          <>
            <a className="login-button" href="/login">
              Login
            </a>
            <a href="/register">Register</a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;

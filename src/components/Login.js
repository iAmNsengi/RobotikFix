import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function performLogin(e) {
    e.preventDefault();
    setLoading(true);
    await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          toast.error("User Not Found");
          setLoading(false);
          throw new Error("Failed to login");
        } else {
          response.json().then((userInfo) => {
            setUserInfo(userInfo);
            setRedirect(true);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        toast.success("Login successful!");
      })
      .catch((error) => {
        toast.error(error);
      });
  }

  if (redirect) return <Navigate to={"/"} />;

  return (
    <div>
      <main>
        <form className="login" onSubmit={performLogin}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
          <p>
            Don't have an account? <a href="/register">Register Here</a>
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    try {
      const resp = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(resp);

      if (resp.ok) {
        toast.success("Account Created successfully, You can now Login!");
        setRedirect(true);
      } else if (resp.status === 500) toast.error("Username Already Taken!");
      else toast.error("Couldn't add user!");
    } catch (e) {
      toast.error(e);
    }
  }

  if (redirect) return <Navigate to={"/login"} />;
  return (
    <div>
      <main>
        <form className="register" onSubmit={register}>
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
          />
          <button type="submit">Register</button>
          <p>
            Already have an account? <a href="/login">Login Here</a>
          </p>
        </form>
      </main>
    </div>
  );
}

export default Register;

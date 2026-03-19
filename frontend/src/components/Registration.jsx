import React, { useState } from "react";
import "../index.css";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Sėkmingai užsiregistravote!");
      setName("");
      setEmail("");
      setPassword("");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="logo">Biudžetas</h1>

        <h2>Create Account</h2>
        <p className="subtitle">Initialize your secure financial vault.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="john@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="submit-btn" type="submit">
            Complete Registration →
          </button>

          <p className="divider">OR SECURE LIVE</p>

          <div className="socials">
            <button>Google</button>
            <button>Apple</button>
          </div>

          <p className="login-text">
            Already have a vault? <span>Login here</span>
          </p>
        </form>
      </div>
    </div>
  );
};
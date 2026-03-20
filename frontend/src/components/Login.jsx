import React, { useState } from "react";
import "../index.css";
import authStore from "../stores/authStore";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = authStore()

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password)
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="logo">Biudžetas</h1>

        <h2>Login</h2>
        <p className="subtitle">Initialize your secure financial vault.</p>

        <form onSubmit={handleSubmit}>
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
            Login →
          </button>

          <p className="divider">OR SECURE LIVE</p>

          <div className="socials">
            <button>Google</button>
            <button>Apple</button>
          </div>

          <p className="login-text">
            Don't have an account? <span>Register here</span>
          </p>
        </form>
      </div>
    </div>
  );
};
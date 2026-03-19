import React from "react";
import "../index.css";

export const Registration = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>

        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="input-group">
            <label>Secure Email</label>
            <input type="email" placeholder="JohnDoe@gmail.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button className="submit-btn">
            CREATE ACCOUNT →
          </button>

          <p className="divider">OR SECURE VIA</p>

          <div className="socials">
            <button>GOOGLE</button>
            <button>BIOMETRIC</button>
          </div>
        </form>
      </div>
    </div>
  );
};
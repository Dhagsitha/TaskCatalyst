import React, { useState } from "react";
import axios from "axios";
import '../styles/login.css';
import { useAuth } from './AuthContext';  // Ensure this is the correct path
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();  // Assuming setAuth is a method to update the context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;  // Ensure password is at least 8 characters
  };

  async function submit(e) {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }
  
    if (!validatePassword(password)) {
      alert("Password should be at least 8 characters");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
  
      const { message, token } = response.data;
      if (message === "login_success") {
        localStorage.setItem("token", token);  // Store the token
        setAuth({ isLoggedIn: true, token });  // Update context
        navigate("/dashboard");  // Redirect to dashboard
      } else {
        alert(message);  // Display other messages from server
      }
    } catch (error) {
      console.error("Failed to log in", error);
      alert("Failed to log in");
    }
  }
  
  return (
    <div>
      <div className="login-container">
        <div className="text">Login</div>
        <form onSubmit={submit}>
          <div className="inputs">
            <div className="input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required  // Ensure input is not empty
              />
            </div>
            <div className="input">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="off"
                required  // Ensure input is not empty
              />
            </div>
          </div>
          <input type="submit" className="sub" value="Log In" onClick={submit}/>
        </form>
        <p style={{ color: 'black' }}>Need an account? <Link to="/signup" style={{ color: 'red' }}>Sign Up here</Link></p>
      </div>
    </div>
  );
}

export default Login;

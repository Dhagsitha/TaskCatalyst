import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/signup.css";
function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const submit = async (e) => {
    e.preventDefault(); 
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password should be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });

      if (response.status===409 ) {
        alert("User already exists");
      } else if (response.status === 201) {
        navigate("/dashboard");
      }
    } catch (error) {
      alert("An error occurred");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container2">
        <div className="text">Sign Up</div>
        <div className="sunderline"></div>
        <form onSubmit={submit}>
          <div className="inputs">
            <div className="input">
              <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
            <div className="input">
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className="input">
              <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
            </div>
          </div>
          <div className="Submit">
            <input type="submit" className="sub" />
          </div>
        </form>
        <p style={{ color: 'black' }}>Already have an account? <Link to="/login" style={{ color: 'red' }}>Login here</Link></p>
      </div>
    </div>
  );
}
export default SignUp;

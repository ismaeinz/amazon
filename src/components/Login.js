import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/login-logo.png";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/GlobalState";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then(() => {
      if (auth) {
        navigate("/");
      } else {
        return null;
      }
    });
  };
  console.log(user);
  return (
    <div className="login">
      <Link to={"/"}>
        <img className="login-logo" src={Logo} alt="logo" />
      </Link>
      <div className="login-container">
        <h1>sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="login-signInBtn" onClick={signIn}>
            Sign in
          </button>
          <p>
            loremEx ea cupidatat incididunt aliqua. Proident aliqua enim mollit
            ex ut commodo amet commodo incididunt duis officia cillum est est.
            Incididunt proident non sint reprehenderit labore commodo.
          </p>
          <button className="login-registerBtn" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

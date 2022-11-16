/** @format */

import { useEffect, useState } from "react";
import fire from "../firebase-config";
import "../css/Login.css";
import Home from "./Home";

/** @format */
const Login = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setpasswordError("");
  };

  const login = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError("Email Required !!");
            break;
          case "auth/wrong-password":
            setpasswordError(error.message);
            break;
          default:
            console.log("this is the last case");
        }
      });
  };

  const register = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError("Email Required !!");
            break;
          case "auth/weak-password":
            setpasswordError("Password Required !!");
            break;
          default:
            console.log("this is the last case");
        }
      });
  };

  const logout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="login-page">
      {user ? (
        <Home logout={logout} user={user} />
      ) : (
        <section className="login">
          <div className="loginContainer">
            <label>Username</label>
            <input
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
              {hasAccount ? (
                <>
                  <button onClick={login}>Sign in</button>
                  <p className="text-center">
                    Dont' have an account ?
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Register
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <button onClick={register}>Register</button>
                  <p className="text-center">
                    Have an Account?
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Log in
                    </span>
                  </p>
                </>
              )}
            </div>
            <p className="text-white mb-2">OR CONNECT WITH</p>
            <div className="text-center d-flex extra-btns mx-0">
              <button
                id="fb-btn"
                style={{ marginRight: "20px", backgroundColor: "#3d5798" }}>
                Facebook
              </button>
              <button
                id="google-btn"
                style={{ marginLeft: "30px", backgroundColor: "#0060df" }}>
                Google
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;

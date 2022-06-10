import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../config/staging";

const SignIn = (props) => {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  // const [isSi, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const navigateToHome = () => {
    // 👇️ navigate to /contacts
    navigate("/Home");
  };
  const enterEmailHandle = (event) => {
    setEnterEmail(event.target.value);
  };

  const enterPasswordHandle = (event) => {
    setEnterPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnterEmail("");
    setEnterPassword("");
    signInHandle();
  };

  const signInHandle = async () => {
    try {
      const response = await axios.post(`${BaseURL}/auth/signIn`, {
        email: enterEmail,
        password: enterPassword,
      });
      console.log("response ", response.data);
      if (response.data.success) {
        props.onLoginSet(true);
        props.onSetToken(response.data.accessToken);
      }
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <div style={{ width: "50%" }} className="container">
      <form onSubmit={submitHandler}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={enterEmail}
            placeholder="Enter email"
            onChange={enterEmailHandle}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={enterPassword}
            onChange={enterPasswordHandle}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
            onClick={() => {
              props.onLoginSet(true);
              navigateToHome();
            }}
          >
            Sign In
          </button>
        </div>
        <p className="forgot-password text-right" style={{ marginTop: "20px" }}>
          Don't have account? <a href="SignUp">Sign Up?</a>
        </p>
        {/* <link to="/signup" className="btn btn-primary">
          Sign up
        </link> */}
      </form>
    </div>
  );
};
export default SignIn;

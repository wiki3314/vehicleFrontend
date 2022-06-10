import axios from "axios";
import { useState } from "react";

import { BaseURL } from "../../config/staging";

const SignUp = (props) => {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterName, setEnterName] = useState("");
  // const [isSi, setIsAuth] = useState(false);

  const enterEmailHandle = (event) => {
    setEnterEmail(event.target.value);
  };

  const enterNameHandle = (event) => {
    setEnterName(event.target.value);
  };

  const signUpHandle = async () => {
    try {
      const response = await axios.post(`${BaseURL}/auth/signup`, {
        email: enterEmail,
        name: enterName,
      });
      console.log("response ", response.data);
      if (response.data.success) {
        props.onSignUpSet(true);
      }
    } catch (error) {
      console.log("error ", error);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnterEmail("");
    setEnterName("");
    signUpHandle();
  };

  return (
    <div style={{ width: "50%" }} className="container">
      <form onSubmit={submitHandler}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter name"
            onChange={enterNameHandle}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={enterEmailHandle}
          />
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "20px" }}
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right" style={{ marginTop: "20px" }}>
          already user? <a href="SignIn">Sign In</a>
        </p>
      </form>
    </div>
  );
};
export default SignUp;

import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import SignIn from "./component/SignIn/SignIn";
import SignUp from "./component/SignUp/SignUp";
import Cars from "./component/Cars/Cars";
import Categories from "./component/Categories/Categories";
import DashBoard from "./component/DashBoard/DashBoard";
import Home from "./component/Home/Home";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NWZiOTcwMC1lNzBmLTExZWMtYWNjMy1hYjk5YWFlOWQ1ZGUiLCJlbWFpbCI6Indpa2kzMzE0QGdtYWlsLmNvbSIsImlhdCI6MTY1NDg0NDA2NSwiZXhwIjoxNjU0OTMwNDY1fQ.wLURyXS-3yMq0wIp3BS3xD4ZMJBLPPpDpVgzLEGonbg"
  );
  // const [isSignUp, setSignUp] = useState(false);

  const loginSetHandler = (login) => {
    setIsLogin(login);
  };
  const setTokenHandler = (value) => {
    setToken(value);
  };
  // const signUpSetHandler = (signUp) => {
  //   setSignUp(signUp);
  // };
  // onSignUpSet={signUpSetHandler}
  return (
    <div style={{ verticalAlign: "middle" }}>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <SignIn
                onLoginSet={loginSetHandler}
                onSetToken={setTokenHandler}
              />
            }
          />
          <Route exact path="SignUp" element={<SignUp />} />

          {isLogin ? (
            <>
              <Route exact path="Home" element={<Home token={token} />} />
              <Route exact path="Cars" element={<Cars />} />
              <Route exact path="Categories" element={<Categories />} />
            </>
          ) : (
            <>
              {/* <Route
                exact
                path="SignIn"
                element={<SignIn onLoginSet={loginSetHandler} />}
              /> */}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* <Route
            exact
            path="/"
            element={<SignIn onLoginSet={loginSetHandler} />}
          /> */

/* <Redirect to="/SignIn" /> */

/* )} */

/* <Route exact path="/signup" element={<SignUp />} /> */

/* {!isSignUp ? (
        <SignIn onLoginSet={loginSetHandler} />
      ) : isLogin ? (
        <DashBoard />
      ) : (
        <SignUp onSignUpSet={signUpSetHandler} />
      )} */

/* <DashBoard /> */

/* {isLogin ? (
        // <Redirect to="/dashboard" />
        <DashBoard />
      ) : isSignUp ? (
        <SignUp onSignUpSet={signUpSetHandler} />
      ) : (
        <SignIn onLoginSet={loginSetHandler} />
      )} */

/* : isSignUp ? (
        <SignUp />
      )  */

/* </Route> */

/* {isAuth ? (
            <Route exact path="/" element={<DashBoard />} />
          ) : (
            <Route
              exact
              path="/SignIn"
              element={<SignIn onAuthSet={authSetHandler} />}
            />
          )} */

/* <Home /> */

/* <Cars /> */

/* <> */

/* <Route exact path="SignUp" element={<SignUp />} />
        <Route exact path="SignIn" element={<SignIn />} /> */

/* <Route exact path="Cars" element={<Cars />} /> */

/* </>; */

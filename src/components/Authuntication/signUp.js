import React from "react";
import styled from "styled-components";
import { Card, Container } from "react-bootstrap";
const SignUp = () => {
  return (
    <SignUpStyled>
      <Container>
        <Card className="card">
          <form className="form">
            <h3>Register</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="#">log in?</a>
            </p>
          </form>
        </Card>
      </Container>
    </SignUpStyled>
  );
};
const SignUpStyled = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-family: sans-serif;
  background: #12c2e9;
  background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
  * {
    box-sizing: border-box;
  }
  button {
    margin-top: 2%;
    width: 100%;
  }
  .card {
    border-radius: 25px;
    width: 50%;
    height: 70%;
    margin: 10%;
    margin-left: 25%;
    align-items: center;
  }
  .form {
    margin-top: 5%;
    width: 70%;
  }
  .fo body,
  html,
  .App,
  #root,
  .outer {
    width: 100%;
    height: 100%;
  }

  .navbar-light {
    background-color: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  }
  .outer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }

  .inner {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
    transition: all 0.3s;
  }

  .outer .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
  }

  .outer h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    padding-bottom: 20px;
  }

  .custom-control-label {
    font-weight: 400;
  }

  .forgot-password,
  .forgot-password a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px;
    color: #7f7d7d;
    margin: 2%;
  }

  .forgot-password a {
    color: #167bff;
  }
`;
export default SignUp;

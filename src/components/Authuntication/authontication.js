import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AuthoPage = () => {
  const navigate = useNavigate();

  return (
    <AuthoPageStyled>
      <div className="body">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="login">
            <form>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <button>Login</button>
              <button onClick={(e) => navigate("/")}>cancel</button>
            </form>
          </div>

          <div className="signup">
            <form>
              <label htmlFor="chk" aria-hidden="true" className="signUpLabel">
                Sign up
              </label>
              <input type="text" name="txt" placeholder="User name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <button className="signUpButton">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </AuthoPageStyled>
  );
};
const AuthoPageStyled = styled.div`
  .body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: "Jost", sans-serif;
    background: linear-gradient(to bottom, #081c4b, #0000b9, #081c4b);
  }
  .main {
    width: 350px;
    height: 500px;
    background: red;
    overflow: hidden;
    background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
      no-repeat center/ cover;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
  }

  #chk {
    display: none;
  }

  .login {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .signup .signUpLabel {
    color: #0000b9;
  }
  label {
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  input {
    width: 60%;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  .signUpButton {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #0000b9; /*rgb(17, 17, 17);*/
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
  }

  button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #0000b9; /*rgb(11, 11, 11);*/
    background: #fff;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
  }

  .signup {
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: 0.8s ease-in-out;
  }
  .login label {
    color: #fff;
    transform: scale(0.6);
  }

  #chk:checked ~ .signup {
    transform: translateY(-500px);
  }
  #chk:checked ~ .signup label {
    transform: scale(1);
  }
  #chk:checked ~ .login label {
    transform: scale(0.6);
  }
`;

export default AuthoPage;

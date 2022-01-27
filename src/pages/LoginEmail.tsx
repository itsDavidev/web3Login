import { Link } from 'react-router-dom';
import styled from 'styled-components';
// 

const LoginEmail = () => {
  return (
    <>
      <div className="loginForm">
        <form>
          <h1>
            Start for Free <span>.</span>
          </h1>
          <div className="names">
            <label className="input firstname">
              <strong>name </strong>
              <input type="text" />
            </label>
            <label className="input lastName">
              <strong>last Name </strong>
              <input type="text" />
            </label>
          </div>
          <label className="input email">
            <strong>email </strong>
            <input type="text" />
          </label>
          <label className="input password">
            <strong>password </strong>
            <input type="password" />
          </label>
          <label className="submitForm">
            <button type="submit">Login</button>
          </label>
        </form>
        <div className="submit">
          <button>create acount</button>
        </div>
      </div>
      <div className="loginLogo">
        <img src={'/logo.svg'} alt="logo itsDavide davidev its David" />
      </div>
    </>
  );
};

export default LoginEmail;

import { Link } from 'react-router-dom';
import styled from 'styled-components';
//

const LoginEmail = () => {
  const evtLogin = (evt: { preventDefault: Function }) => {
    evt.preventDefault();
    
  };
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
              <input required type="text" />
            </label>
            <label className="input lastName">
              <strong>last Name </strong>
              <input required type="text" />
            </label>
          </div>
          <label className="input email">
            <strong>email </strong>
            <input required type="text" />
          </label>
          <label className="input password">
            <strong>password </strong>
            <input required type="password" />
          </label>
          <label className="submitForm">
            <button onClick={evtLogin} type="submit">
              Login
            </button>
          </label>
        </form>
        <div className="submit">
          <button onClick={evtLogin}>create acount</button>
        </div>
      </div>
      <div className="loginLogo">
        <img src={'/logo.svg'} alt="logo itsDavide davidev its David" />
      </div>
    </>
  );
};

export default LoginEmail;

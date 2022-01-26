import styled from 'styled-components';
const StyledLogin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1rem;
  background-color: #595b63;
  color: #fff;
  min-height: 100vh;
  h1 {
    margin: 0;
  }
  .login {
    background-image: url('/fondoImage.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    width: 100%;
    min-height: 600px;
    height: 100%;
    opacity: 0.9;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-template-rows: 100px 1fr;
    align-items: center;
    ::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  .navlogin {
    grid-column: 1/3;
    height: 50px;
    position: relative;
    display:flex;
    align-items:center;
    ul{
      display:flex;
      align-items:center;
      list-style:none;
      margin: 0 3rem;
      li{
        margin-right:1rem;
      }
    }
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1rem;
  }
  .loginForm {
    position: relative;
    grid-column: 1/2;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .names {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .submitForm{
      display: flex;
      justify-content:center;
      align-items:center;
      margin: 2rem 0; 
    }
  }
`;
const App = () => {
  return (
    <StyledLogin>
      <div className="login">
        <div className="navlogin">
          <ul>
            <li>metamastk</li>
            <li>email</li>
          </ul>
        </div>
        <div className="loginForm">
          <form>
            <h1>Login</h1>
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
        <div className="loginlogo"></div>
      </div>
    </StyledLogin>
  );
};

export default App;

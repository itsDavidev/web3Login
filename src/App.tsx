// import { connector, getLibreray } from '../config/web3';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import WebLogin from './pages/LoginMetamask';
import styled from 'styled-components';
import LoginEmail from './pages/LoginEmail';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Navbar from './components/Navbar';

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

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
  color: #000000;
  min-height: 100vh;
  h1 {
    margin: 0;
  }
  .login {
    background-image: url('/fondoImage.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #000000;
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
      background-color: rgba(0, 0, 0, 0);
    }
  }
  span {
    color: #0449e9;
  }
  .input {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1rem;
    background: transparent;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    padding: 0.5rem;
    color: #0f3386;
    letter-spacing: 3px;
    text-transform: uppercase;
    input {
      color: #000000;
      font-weight: bold;
      padding: 0.1rem;
      background: transparent;
      border: none;
      :focus {
        outline: none;
      }
    }
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
    .submitForm {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 2rem 0;
    }
  }
  .loginLogo {
    grid-column: 2/3;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.9;
    /* border-bottom: 1px solid #004394; */
  }
  .submitForm {
    button {
      border: none;
      padding: 1rem;
      border-radius: 1rem;
      width: 100px;
      background-color: #004394;
      font-weight: bold;
      letter-spacing: 3px;
    }
  }
  .submit {
    button {
      background-color: #1b2a4a;
      border: none;
      padding: 1rem;
      border-radius: 1rem;
      width: 200px;
      font-weight: bold;
      letter-spacing: 3px;
    }
  }
`;

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <StyledLogin>
        <div className="login">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="*" element={<Navigate to="/welcome" />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/login/email" element={<LoginEmail />} />
              <Route path="/login/metamask" element={<WebLogin />} />
            </Routes>
          </BrowserRouter>
        </div>
      </StyledLogin>
    </Web3ReactProvider>
  );
};

export default App;

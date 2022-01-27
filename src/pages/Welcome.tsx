import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWelcome = styled.section`
  grid-column: 1/3;
  display: grid;
  justify-content: center;
  align-items: center;
  position:relative;
  h1 {
    background: transparent;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.5);
    padding: 3rem;
    color: #0449e9;
  }
  .linksLogin{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  strong {
    margin: 2rem;
    a {
      font-size: 1.3rem;
      color: #ffffff;
      text-transform: none;
      font-weight: bold;
      text-decoration: none;
      border-bottom: 1px solid #0449e9;
    }
  }
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      <h1>
        Welcome to the <span>DavLogin</span>
      </h1>
      <div className="linksLogin">
        <strong>
          <Link to="/login/email">Login </Link>
        </strong>
        <strong>
          <Link to="/login/metamask">Login Metamask</Link>
        </strong>
      </div>
    </StyledWelcome>
  );
};

export default Welcome;

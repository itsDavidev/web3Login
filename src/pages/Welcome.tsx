import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>
        Welcome to the <strong>Metamask</strong>
      </h1>
      <Link to="/login/email">Login </Link>
      <Link to="/login/metamask">Login metamask</Link>
    </div>
  );
};

export default Welcome;

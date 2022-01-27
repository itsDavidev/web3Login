import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  .navlogin {
    grid-column: 1/3;
    position: relative;
    display: flex;
    align-items: center;
  }
  strong {
    margin: 0 2rem;
    font-size: 1.5rem;
    color: #0449E9;
  }
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 3rem;
    li {
      margin: 0 1rem;
      a {
        color: #000000;
        font-weight: bold;
        font-size: 1.2rem;
        text-decoration: none;
        letter-spacing: 3px;
        text-transform:uppercase;
      }
    }
  }
  .active {
    color: #ffffff;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <div className="navlogin">
        <strong>DavLogin</strong>
        <ul>
          <li>
            <NavLink to="/login/metamask">metamastk</NavLink>
          </li>
          <li>
            <NavLink to="/login/email">email</NavLink>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

export default Navbar;

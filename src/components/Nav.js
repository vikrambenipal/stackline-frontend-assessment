import React from 'react';
import styled from 'styled-components';
import logo from '../stackline_logo.svg';

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    background-color: #072948;
    height: 60px;
    width: 100%;
    img {
        height: 40%;
        align-self: center;
        margin-left: 20px;
    }
`
const Nav = () => {
  return (
    <NavBar>
        <img src={logo} alt=""/>
    </NavBar>
  )
}

export default Nav;
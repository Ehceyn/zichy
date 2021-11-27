import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  z-index: 2;
  margin-top: 10px;
  background-color: rgba(255, 255, 255);
`;

export const NavMenu = styled.nav`
  background-color: rgba(40, 44, 52, 0.884);
  width: 830px;
  display: flex;
  justify-content: flex-end;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const NavLinkUl = styled.nav`
  display: flex;
  width: 700px;
  list-style: none;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  margin-right: 70px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

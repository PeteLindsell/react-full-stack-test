import * as React from "react";
import theme from "../../variables";

import NavItem from "./nav-item";
import styled from "styled-components";

import Burger, { BurgerMenu } from "./burger";
import { device } from "../../helpers";

const navData = [
  { home: "/" },
  { launches: "launches" },
  { rockets: "rockets" },
];

const NavList = styled.ul`
  color: white;
  display: none;

  @media ${device.laptop} {
    display: inline-flex;
  }
`;

const NavWrapper = styled.nav`
  margin-left: auto;

  ${BurgerMenu} {
    @media ${device.laptop} {
      display: none;
    }
  }
`;

const navigation = () => {
  return (
    <>
      <NavWrapper>
        <NavList>
          {navData.map((value, index) => {
            const title = Object.keys(value)[0];
            const url = value[title];

            return (
              <NavItem
                key={index}
                title={title}
                url={url}
                color={theme.white}
              />
            );
          })}
        </NavList>
        <Burger />
      </NavWrapper>
    </>
  );
};

export default navigation;

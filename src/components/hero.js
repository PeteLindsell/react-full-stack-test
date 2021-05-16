import * as React from "react";
import styled from "styled-components";
import { device } from "../helpers";

import Image from "./image";
import Lockup, { LockupContainer } from "./lockup";
import beer from "../images/space.png";
import Wrapper from "../layout/wrapper";

const Hero = styled.div`
  color: white;
  height: 100vh;
  overflow: hidden;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
    max-height: 100vh;
    overflow: hidden;
    position: relative;
  }

  ${LockupContainer} {
    position: absolute;
    padding-top: 200px;
    width: 100%;
    max-width: 550px;
  }
`;

const hero = ({ text, title }) => {
  return (
    <>
      <Hero>
        <Wrapper>
          <Lockup text={text} tag="h1" title={title} />
        </Wrapper>

        <Image url={beer} />
      </Hero>
    </>
  );
};

export default hero;

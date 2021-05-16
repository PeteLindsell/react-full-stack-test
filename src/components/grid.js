import styled from "styled-components";

import { device } from "../helpers";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > * {
    max-width: 100%;
    @media ${device.tablet} {
      width: 49%;
    }
    @media ${device.laptop} {
      width: 32%;
    }
  }
`;

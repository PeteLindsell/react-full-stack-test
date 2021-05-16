import React from "react";
import styled from "styled-components";
import { device } from "../../helpers";
import Image from "../image";
import Lockup from "../lockup";

const LaunchCardWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #b3c7cc;
  position: relative;
  margin-top: auto;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 20px;
  background-color: #f6f7f7;
  flex: 1;
`;

function LaunchCard(props) {
  return (
    <LaunchCardWrapper>
      <ImagContainer>
        <Image url={props.image} />
      </ImagContainer>

      <Content>
        <Lockup text={props.description} tag="h3" title={props.title} />
      </Content>
      {/* Youtube Link ? */}
    </LaunchCardWrapper>
  );
}

export default LaunchCard;

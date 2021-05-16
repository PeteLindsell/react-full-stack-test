import React from "react";
import styled from "styled-components";
import { device } from "../../helpers";
import Image from "../image";
import Lockup from "../lockup";

const CardWrapper = styled.div`
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
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

function Card(props) {
  return (
    <CardWrapper>
      <CardContainer>
        <ImagContainer>
          <Image url={props.image} />
        </ImagContainer>

        <Content>
          <Lockup text={props.description} tag="h3" title={props.title} />
          {props.link && <a href={props.link}>View launch on YouTube</a>}
        </Content>
      </CardContainer>
    </CardWrapper>
  );
}

export default Card;
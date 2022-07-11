import React from "react";
import styled from "styled-components";
import { GoPlus } from "react-icons/go";

const MiddleContainer = (props) => {
  // to destructure props,
  //  const MiddleContainer = ({text, img, fd, headerText}) => {}
  // to call the destructured props, place it inside a curly bracket.
  //
  return (
    <Container>
      <Wrapper flexd={props.fd}>
        {/* <Wrapper flexd = {fd}> */}
        <Image src={props.img} />
        {/* <image src={img}/> */}
        <Content>
          <Heading>{props.text}</Heading>
          {/* <Heading>{text}</Heading> */}
          <Title>{props.headerText}</Title>
          <Desc>{props.description}</Desc>
          {props.acc}
        </Content>
      </Wrapper>
    </Container>
  );
};

export default MiddleContainer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background: #fcfbff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: ${({ flexd }) => (flexd ? "row-reverse" : "row")};
`;

const Content = styled.div`
  width: 45%;
  margin-top: 20px;
  margin-left: 10px;
`;

const Image = styled.img`
  width: 400px;
  height: 350px;
  margin-right: 20px;
`;

const Heading = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const Desc = styled.div`
  font-size: 17px;
  margin-top: 20px;
  line-height: 1.5;
  font-weight: 600;
  color: grey;
  width: 600px;
  letter-spacing: 1.3px;
`;

const Plus = styled.div`
  margin-right: 15px;
`;

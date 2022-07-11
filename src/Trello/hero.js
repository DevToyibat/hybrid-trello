import React from "react";
import styled from "styled-components";
import Img from "./img/heroImage.png";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Trello helps teams move work forward.</Title>
          <Desc>
            Collaborate, manage projects, and reach new productivity peaks. From
            high rises to the home office, the way your team works is
            unique—accomplish it all with Trello.
          </Desc>
          <ButtonHolder>
            <Input placeholder="Email" />
            <Button2>Sign up-it's free!</Button2>
          </ButtonHolder>
        </Content>
        <Image src={Img} />
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: linear-gradient(#ece8ff, #f2f0ff);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 700px;
  padding: 0 40px;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const Desc = styled.div`
  font-size: 20px;
  padding-top: 20px;
  line-height: 1.5;
  width: 80%;
`;

const ButtonHolder = styled.div`
  margin: 20px 20px 0 0;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  margin-right: 15px;
  border-radius: 5px;
  border: solid 1px grey;
  font-size: 18px;
  padding-left: 10px;
`;

const Button2 = styled.button`
  background: #0056d9;
  color: white;
  width: 280px;
  height: 45px;
  border-radius: 5px;
  border: solid 1px grey;
  font-size: 18px;
  transition: all 350ms;

  :hover {
    background: #113cfc;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 500px;
`;

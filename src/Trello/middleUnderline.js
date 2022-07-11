import React from "react";
import styled from "styled-components";
// import img5 from "./img/pricingImage.svg";
import data from "./data.json";
import EbayMiddle from "./ebayMiddle";

const MiddleUnderline = () => {
  return (
    <Container>
      <Wrapper>
        <UnderlineContainer>
          <Underline></Underline>
        </UnderlineContainer>
        <DivWrappeer>
          {data?.map((props) => (
            <Div key={props.id}>
              <Image src={props.img} />
              <Content>
                <Title>{props.title}</Title>
                <Desc>{props.description}</Desc>
                <Link href={props.link}>
                  <Button>{props.btn}</Button>
                </Link>
                {/* <Link>Tour Trello</Link> */}
              </Content>
            </Div>
          ))}
        </DivWrappeer>

        <UnderlineContainer>
          <Underline></Underline>
        </UnderlineContainer>
        <EbayMiddle />
      </Wrapper>
    </Container>
  );
};

export default MiddleUnderline;

const DivWrappeer = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #fcfbff;
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const UnderlineContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Underline = styled.div`
  width: 80%;
  height: 1px;
  background: black;
  margin: 25px 0;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  padding-left: 180px;
`;

const Image = styled.img``;

const Content = styled.div`
  margin: 20px 0 0 30px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const Desc = styled.div`
  font-size: 17px;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 1px;
  width: 350px;
  margin: 20px 0;
  color: #393e46;
`;

const Link = styled.a``;

const Button = styled.button`
  width: 140px;
  height: 40px;
  font-size: 15px;
  border-radius: 5px;
  border: solid 1px blue;
  color: blue;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    color: white;
    background: blue;
  }
`;

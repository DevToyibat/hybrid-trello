import React from "react";
import styled from "styled-components";
import Log from "./img/ebayLogo.svg";
import { ImQuotesLeft } from "react-icons/im";

const EbayMiddle = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Ebay>
            <Logo src={Log} />
            <Title>INDUSTRY</Title>
            <SubTitle>eCommerce</SubTitle>
          </Ebay>
          <Signature>
            <Quote>
              <ImQuotesLeft />
            </Quote>
            <Desc>
              Everyone loves it; it has democratized our finance function. In
              some ways Trello shattered hierarchy and brought us together.
            </Desc>
            <Sign>
              <Sign1>BHARATH SUNDAR</Sign1>
              <Sign2>Finance, eBay</Sign2>
            </Sign>
          </Signature>
        </Content>

        <UnderlineContainer>
          <Underline></Underline>
        </UnderlineContainer>
      </Wrapper>
    </Container>
  );
};

export default EbayMiddle;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
  background: #e6fcff;
  display: flex;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 60vh;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #393e46;
  padding: 0 0 0 150px;
  margin: 50px 0 40px 0;
`;

const Ebay = styled.div``;

const Logo = styled.img`
  width: 200px;
  height: 80px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 23px;
  font-weight: 500;
`;

const Signature = styled.div`
  padding-left: 100px;
`;

const Quote = styled.div`
  font-size: 30px;
`;

const Desc = styled.div`
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 1px;
  width: 50%;
  line-height: 1.5;
  margin-left: 50px;
`;

const Sign = styled.div`
  padding-left: 700px;
`;

const Sign1 = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const Sign2 = styled.div`
  font-size: 20px;
`;

const UnderlineContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Underline = styled.div`
  width: 80%;
  height: 4px;
  background: black;
  margin: 25px 0;
`;

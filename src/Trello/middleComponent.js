import React from "react";
import styled from "styled-components";
import MiddleContainer from "./middleContainer";
import img1 from "./img/1stImage.svg";
import img2 from "./img/2ndImage.svg";
import img3 from "./img/3rdImage.png";
import img4 from "./img/4thImage.png";
import { Accordion1, Accordion2, Accordion3, Accordion4 } from "./accordion";
// import Accord from "./accord";

const MiddleComponent = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Features to help your team succeed</Title>
          <Desc>
            Powering a productive team means using a powerful tool (and plenty
            of snacks). From meetings and projects to events and goal setting,
            Trello’s intuitive features give any team the ability to quickly set
            up and customize workflows for just about anything.
          </Desc>
        </Content>
        <MiddleContainer
          text="CHOOSE A VIEW"
          headerText="The board is just the beginning"
          img={img1}
          description="Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more."
          acc={<Accordion1 />}
        />
        {/* <Accord /> */}

        <MiddleContainer
          text="DIVE INTO THE DETAILS"
          headerText="Cards contain everything you need"
          img={img2}
          fd
          description="Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more."
          acc={<Accordion2 />}
        />
        {/* <Accord /> */}

        <MiddleContainer
          text="MEET YOUR NEW BUTLER"
          headerText="No-code automation"
          img={img3}
          description="Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team."
          acc={<Accordion3 />}
        />
        {/* <Accord /> */}

        <MiddleContainer
          text="POWER-UPS"
          headerText="Integrate top work tools"
          img={img4}
          fd
          description="Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered."
          acc={<Accordion4 />}
        />
        {/* <Accord /> */}
      </Wrapper>
    </Container>
  );
};

export default MiddleComponent;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fcfbff;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  width: 36%;
  margin: 20px 150px 100px 170px;
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
  letter-spacing: 1.3px;
  color: #393e46;
`;

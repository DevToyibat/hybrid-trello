import React from "react";
import styled from "styled-components";
import AccordionList from "./AccordionList";

export const Accordion1 = () => {
  const [more, showMore] = React.useState([
    {
      id: 1,
      learnMore: (
        <div>
          You and your team can start up a Trello board in seconds. With the
          <br />
          ability to view board data from many different angles, the entire{" "}
          <br />
          team stays up-to-date in the way that suits them best:
          <ul>
            <li>Use a Timeline view for project planning</li>

            <li>Calendar helps with time management</li>
            <li>Table view connects work across boards</li>
            <li>See board stats with Dashboard, and more!</li>
          </ul>
          <a href="https://trello.com/views" target="_blank">
            {" "}
            Learn more about views
          </a>
        </div>
      ),
    },
  ]);
  return (
    <Container>
      <Wrapper>
        {more.map((data) => {
          return <AccordionList datum={data} />;
        })}
      </Wrapper>
    </Container>
  );
};
export const Accordion2 = () => {
  const [more, showMore] = React.useState([
    {
      id: 2,
      learnMore: (
        <div>
          Spin up a Trello card with a click, then uncover everything it can
          hold. <br />
          Break down bigger card tasks into steps with file attachment
          <br />
          previews, reminders, checklists and comments—emoji reactions <br />
          included! Plus, gain powerful perspective by seeing all cards by list{" "}
          <br />
          and status at the board level.
          <p>Your team can:</p>
          <ul>
            <li>Manage deadlines</li>
            <li>Provide and track feedback</li>
            <li>Assign tasks and hand off work</li>
            <li>Connect work across apps</li>
          </ul>
        </div>
      ),
    },
  ]);
  return (
    <Container>
      <Wrapper>
        {more.map((data) => {
          return <AccordionList datum={data} />;
        })}
      </Wrapper>
    </Container>
  );
};
export const Accordion3 = () => {
  const [more, showMore] = React.useState([
    {
      id: 3,
      learnMore: (
        <div>
          Butler uses natural language commands to automate just about any{" "}
          <br />
          task in Trello:
          <ul>
            <li>Automate common actions like moving lists</li>
            <li>Create custom buttons to build process quickly</li>
            <li>Surface upcoming deadlines to the team</li>
            <li>Schedule teammate assignments, and more!</li>
          </ul>
          <a href="https://trello.com/butler-automation" target="_blank">
            {" "}
            Learn more about Butler Automation
          </a>
        </div>
      ),
    },
  ]);
  return (
    <Container>
      <Wrapper>
        {more.map((data) => {
          return <AccordionList datum={data} />;
        })}
      </Wrapper>
    </Container>
  );
};
export const Accordion4 = () => {
  const [more, showMore] = React.useState([
    {
      id: 4,
      learnMore: (
        <div>
          From Reporting to Custom Fields to your beloved software
          <br />
          integrations—we’ve got functionalities, your favorites, and more!
          <p>Such as:</p>
          <ul>
            <li>Confluence</li>
            <li> Slack</li>
            <li>Dropbox</li>
            <li>Google Drive</li>
            <li>Evernote</li>
          </ul>
          <a href="https://trello.com/power-ups" target="_blank">
            {" "}
            Learn more about Power-Ups
          </a>
        </div>
      ),
    },
  ]);
  return (
    <Container>
      <Wrapper>
        {more.map((data) => {
          return <AccordionList datum={data} />;
        })}
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div``;
const Container = styled.div``;

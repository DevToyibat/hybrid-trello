import React from "react";
import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const AccordionList = ({ datum }) => {
  const [show, setShow] = React.useState(false);
  return (
    <Container>
      <Button onClick={() => setShow(!show)}>
        {show ? <FiMinus /> : <GoPlus />}Learn More
      </Button>
      {show && <LearnMore>{datum.learnMore}</LearnMore>}
    </Container>
  );
};

export default AccordionList;

const LearnMore = styled.div``;
const Button = styled.div``;
const Container = styled.div``;

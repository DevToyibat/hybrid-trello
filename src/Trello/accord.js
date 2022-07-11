import React from "react";
import styled from "styled-components";
import { GoPlus } from "react-icons/go";

const Accord = () => {
  return (
    <Accordion>
      <Plus>
        <GoPlus fontSize="0.6em" />
      </Plus>
      Learn more
    </Accordion>
  );
};

export default Accord;

const Accordion = styled.div`
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Plus = styled.div`
  margin-right: 15px;
`;

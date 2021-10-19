import { useState } from "react";
import styled, { css } from "styled-components";
import Card from "../Card/Card";
import Checkbox from "../Checkbox/Checkbox";

const StyledTask = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTaskAction = styled.div`
  margin-left: auto;
`;

const Title = styled.span`
  margin-left: 0.5rem;

  ${(props) =>
    props.checked &&
    css`
      text-decoration: line-through;
      color: #c5c3c3;
    `};
`;

function Task({ title, checked = false }) {
  const [checkedState, setcheckedState] = useState(checked);

  function checkHandler() {
    setcheckedState(!checkedState);
  }

  return (
    <Card>
      <StyledTask>
        <Checkbox checked={checkedState} onClick={checkHandler} />
        <Title checked={checkedState}>{title}</Title>
        {/* <StyledTaskAction>
          <i class="fas fa-trash"></i>
        </StyledTaskAction> */}
      </StyledTask>
    </Card>
  );
}

export default Task;

import styled, { css } from "styled-components";
import Card from "../Card/Card";
import Checkbox from "../Checkbox/Checkbox";

const StyledTask = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTaskAction = styled.div`
  margin-left: auto;
  color: #e05b5b;

  cursor: pointer;
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

function Task({ title, checked = false, onChange, onDelete }) {
  return (
    <Card whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <StyledTask>
        <Checkbox checked={checked} onChange={onChange} />
        <Title checked={checked}>{title}</Title>
        <StyledTaskAction onClick={onDelete}>
          <i class="fas fa-trash"></i>
        </StyledTaskAction>
      </StyledTask>
    </Card>
  );
}

export default Task;

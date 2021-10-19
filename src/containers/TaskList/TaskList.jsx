import styled from "styled-components";

const StyledTaskList = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;
function TaskList({ children }) {
  return <StyledTaskList>{children}</StyledTaskList>;
}

export default TaskList;

import styled from "styled-components";
import Task from "../../components/Task/Task";
import Container from "../../components/Container/Container";
import TaskList from "../TaskList/TaskList";

const StyledHome = styled.div`
  background-color: #f4f7fd;
  height: 100vh;
  padding: 0 1.5rem;
`;

const StyledSectionTitle = styled.h2`
  padding: 1rem 0;
`;

function Home() {
  return (
    <StyledHome>
      <Container>
        <StyledSectionTitle>Tasks</StyledSectionTitle>
        <TaskList>
          <Task title="Do a little jump for 3 minutes" checked></Task>
          <Task title="Do a little jump for 3 minutes"></Task>
          <Task title="Do a little jump for 3 minutes"></Task>
        </TaskList>
      </Container>
    </StyledHome>
  );
}

export default Home;

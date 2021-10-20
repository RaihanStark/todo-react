import styled from "styled-components";
import Task from "../../components/Task/Task";
import Container from "../../components/Container/Container";
import TaskList from "../TaskList/TaskList";
import BottomNavigation from "../BottomNavigation/BottomNavigation";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, deleteTask } from "../../redux";

const StyledHome = styled.div`
  background-color: #f4f7fd;
  height: 100vh;
`;

const StyledSectionTitle = styled.h2`
  padding: 1rem 0;
`;

function Home() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <StyledHome>
      <Container>
        <StyledSectionTitle>Tasks</StyledSectionTitle>
        <TaskList>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                title={task.title}
                checked={task.isChecked}
                onChange={() => dispatch(toggleTask(task.id))}
                onDelete={() => dispatch(deleteTask(task.id))}
              ></Task>
            );
          })}
        </TaskList>
      </Container>
      <BottomNavigation />
    </StyledHome>
  );
}

export default Home;

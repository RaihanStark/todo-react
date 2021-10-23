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
  console.log(tasks);
  return (
    <StyledHome>
      <Container>
        <StyledSectionTitle>Tasks</StyledSectionTitle>
        <TaskList>
          {tasks.length !== 0 ? (
            tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  title={task.title}
                  checked={task.isChecked}
                  onChange={() => dispatch(toggleTask(index))}
                  onDelete={() => dispatch(deleteTask(index))}
                ></Task>
              );
            })
          ) : (
            <h3
              style={{ color: "#929292", fontWeight: 400, textAlign: "center" }}
            >
              There's nothing to do!
            </h3>
          )}
        </TaskList>
      </Container>
      <BottomNavigation />
    </StyledHome>
  );
}

export default Home;

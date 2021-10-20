import styled from "styled-components";
import Container from "../../components/Container/Container";
import Input from "../../components/Input/Input";

const StyledHome = styled.div`
  background-color: #7a77ff;
  height: 100%;
`;

const StyledTask = styled.div`
  background-color: white;
  height: max-content;
  border-radius: 2rem;
  height: 100%;
`;

const StyledSectionTitle = styled.h2`
  padding: 1rem 0;
  color: white;
`;

function CreateTask() {
  return (
    <StyledHome>
      <Container>
        <StyledSectionTitle>Add new tasks</StyledSectionTitle>
      </Container>

      <Container>
        <StyledTask>
          <div>
            <Input />
            <button>Create New Task</button>
          </div>
        </StyledTask>
      </Container>
    </StyledHome>
  );
}

export default CreateTask;

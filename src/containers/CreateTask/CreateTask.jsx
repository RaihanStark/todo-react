import styled from "styled-components";
import Container from "../../components/Container/Container";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";

const StyledHome = styled.div`
  background-color: #7a77ff;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTask = styled.div`
  background-color: white;
  height: max-content;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  /* height: 100%; */
  flex-grow: 1;
`;

const StyledSectionTitle = styled.h2`
  padding: 1rem 0;
  color: white;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
`;

const TaskHeader = styled(Container)`
  min-height: 7rem;
`;

function CreateTask() {
  return (
    <StyledHome>
      <TaskHeader>
        <StyledSectionTitle>Add new tasks</StyledSectionTitle>
      </TaskHeader>

      <StyledTask>
        <Container>
          <FormGroup>
            <Label>TITLE</Label>
            <Input placeholder="Title" />
            <Button>Create New Task</Button>
          </FormGroup>
        </Container>
      </StyledTask>
    </StyledHome>
  );
}

export default CreateTask;

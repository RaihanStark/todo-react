import styled from "styled-components";
import Container from "../../components/Container/Container";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux";
import { useState } from "react";

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

const TaskHeader = styled.div`
  /* min-height: 7rem; */
  margin-top: 1.5rem;
`;

const BackButton = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

function CreateTask() {
  const [input, setinput] = useState({
    title: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <StyledHome>
      <TaskHeader>
        <Container>
          <Link to="/">
            <BackButton icon={faChevronLeft} size="xl" color="white" />
          </Link>

          <StyledSectionTitle>Add new tasks {input.title} </StyledSectionTitle>
        </Container>
      </TaskHeader>

      <StyledTask>
        <Container>
          <FormGroup>
            <Label>TITLE</Label>
            <Input
              placeholder="Title"
              value={input.title}
              onChange={(e) => setinput({ ...input, title: e.target.value })}
            />
            <Button
              onClick={() => {
                dispatch(addTask(input.title));
                history.push("/");
              }}
            >
              Create New Task
            </Button>
          </FormGroup>
        </Container>
      </StyledTask>
    </StyledHome>
  );
}

export default CreateTask;

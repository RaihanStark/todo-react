import styled from "styled-components";

const StyledInput = styled.input`
  background-color: #afadf2;
  border: none;
  padding: 0.75rem 1rem;
  color: white;

  border-radius: 0.5rem;
`;

function Input() {
  return <StyledInput type="text" />;
}

export default Input;

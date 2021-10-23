import styled from "styled-components";

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  padding: 0.75rem 0;
  color: black;
  border-bottom: 1px solid gray;
  font-size: 1rem;
  &:focus-visible {
    outline: none;
  }
`;

function Input({ placeholder, value, onChange }) {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;

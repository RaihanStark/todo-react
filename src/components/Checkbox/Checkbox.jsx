import styled from "styled-components";

const StyledCheckbox = styled.input`
  appearance: none;
  --webkit-appearance: none;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid #6e6bff;
  cursor: pointer;
  border-radius: 50%;
  margin: 0;

  &:checked {
    background-color: #6e6bff;
  }
`;

function Checkbox({ checked, onChange }) {
  return (
    <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
  );
}

export default Checkbox;

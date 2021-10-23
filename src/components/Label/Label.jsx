import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 0.7rem;
  color: #a6a1a1;
`;

function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

export default Label;

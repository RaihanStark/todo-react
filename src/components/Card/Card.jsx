import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;

  -webkit-box-shadow: 0px 4px 0px 0px #cddaf3;
  -moz-box-shadow: 0px 4px 0px 0px #cddaf3;
  box-shadow: 0px 4px 0px 0px #cddaf3;
`;

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;

import styled from "styled-components";

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 960px;

  @media (max-width: 1140px) {
    max-width: 768px;
  }

  @media (min-width: 1140px) {
    max-width: 960px;
  }
`;
const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
export default Container;

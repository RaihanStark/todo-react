import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCard = styled(motion.div)`
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;

  -webkit-box-shadow: 0px 4px 0px 0px #cddaf3;
  -moz-box-shadow: 0px 4px 0px 0px #cddaf3;
  box-shadow: 0px 4px 0px 0px #cddaf3;
`;

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;

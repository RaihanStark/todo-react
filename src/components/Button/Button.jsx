import styled from "styled-components";
import { motion } from "framer-motion";

const Styledbutton = styled(motion.button)`
  margin: 1em 0;
  background-color: #7a77ff;
  color: white;
  padding: 0.75rem 1rem;

  border-radius: 0.5rem;
  border: none;
  -webkit-box-shadow: 0px 4px 0px 0px #cddaf3;
  -moz-box-shadow: 0px 4px 0px 0px #cddaf3;
  box-shadow: 0px 4px 0px 0px #cddaf3;

  cursor: pointer;
`;

function Button({ children }) {
  return (
    <Styledbutton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {children}
    </Styledbutton>
  );
}

export default Button;

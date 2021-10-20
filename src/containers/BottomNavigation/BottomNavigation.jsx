import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 4rem;

  background-color: white;
  display: flex;
  justify-content: center;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: #7a77ff;
  border-radius: 50%;
  margin-top: -1.85rem;

  border: 10px #afadf2 solid;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const StyleLink = styled(Link)`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

function BottomNavigation() {
  return (
    <Nav>
      <StyleLink to="/create_task">
        <Circle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FontAwesomeIcon icon={faPlus} size="xl" color="white" />
        </Circle>
      </StyleLink>
    </Nav>
  );
}

export default BottomNavigation;

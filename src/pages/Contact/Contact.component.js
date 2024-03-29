import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ThemeContext } from "../../contexts/ThemeContext";
import { increment, decrement } from "../../redux/actions";

// const component = 'Component';
// `My ${component}` -- 'My ' + component;

// ### Frontend 69 ###

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.primary};
`;

const Description = styled.p`
  font-size: 1em;
  text-align: center;
  color: #000;
`;

const Button = styled.button`
  background-color: ${(props) => (props.th === "light" ? "#eee" : "#222")};
  color: ${(props) => (props.th === "light" ? "#222" : "#eee")};
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 4px;
  margin-left: 50%;
  transform: translate(-50%);
`;

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  // Frontend 70
  const history = useHistory();

  const counter = useSelector((state) => state.counter.counter); // --> counter: 0
  const dispatch = useDispatch();

  console.log("counter", counter);

  const onClickHandler = () => {
    // history.push("/products");
    history.goBack();
  };

  return (
    <div>
      <Title>Contact</Title>
      <Description>Send us a message!</Description>
      <Button onClick={onClickHandler} th={theme}>
        Go back!
      </Button>
      <div>
        <Description>Counter: {counter}</Description>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
};

export default Contact;

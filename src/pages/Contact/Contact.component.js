import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

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

const Contact = () => {
  const appContext = useContext(AppContext);

  console.log("appContext", appContext);
  // Frontend 70
  const history = useHistory();

  const onClickHandler = () => {
    history.goBack();
  };

  return (
    <div>
      <Title>Contact</Title>
      <Description>Send us a message!</Description>
      <button onClick={onClickHandler}>Go back!</button>
    </div>
  );
};

export default Contact;

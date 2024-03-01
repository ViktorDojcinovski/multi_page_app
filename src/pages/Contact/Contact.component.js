import styled from "styled-components";

// const component = 'Component';
// `My ${component}` -- 'My ' + component;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Description = styled.p`
  font-size: 1em;
  text-align: center;
  color: #000;
`;

const Contact = () => {
  return (
    <div>
      <Title>Contact</Title>
      <Description>Send us a message!</Description>
    </div>
  );
};

export default Contact;

import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.primary};
`;

const About = () => {
  return (
    <div>
      <Title>About</Title>
      <p>This is the about page</p>
    </div>
  );
};

export default About;

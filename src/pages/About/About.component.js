import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { ThemeContext } from "../../contexts/ThemeContext";
import { fetchPosts } from "../../redux/thunks";

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

// (boolean) ? value_1 : value_2

const About = () => {
  const history = useHistory();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  // componentDidMount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const onClickHandler = () => {
    history.goForward();
  };

  return (
    <div>
      <Title>About</Title>
      <Description>This is the about page</Description>
      <Button onClick={onClickHandler} th={theme}>
        Go forward!
      </Button>
      <div>
        {loading
          ? "loading"
          : error
          ? error.message
          : posts.map((item) => {
              return (
                <>
                  <p>{item.title}</p>
                </>
              );
            })}
      </div>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import styled from "styled-components";
import { app } from "../Base";
import { useHistory } from "react-router-dom";

const Tasked = () => {
  const history = useHistory();
  const [task, setTask] = useState("");
// this is to add task to the database

  const postTask = async () => {
    await app.firestore().collection("myTask").doc().set({
      task,
      done: false,
    });
    setTask("");
// use history use as a router, to route to other pages
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <Card>
          <Input
            placeholder="Enter a new Task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <Button onClick={postTask}>Add Task</Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Tasked;

const Button = styled.div`
  width: 80%;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: red;
  margin: 0 auto;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  margin: 5px 0;
  padding-left: 5px;
`;
const Card = styled.div``;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #e0e0e0;
  padding-top: 150px;
`;
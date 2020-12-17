import React, { useState } from "react";
import {
  Header,
  Image,
  Container,
  Card,
  Input,
  Button,
  Grid,
  Form,
  Segment,
} from "semantic-ui-react";

function App() {
  const [name, setName] = useState("...");
  const [inputText, setInputText] = useState("");

  function onClick() {
    const prefix = "Hello, ";
    const title = prefix + inputText;

    setName(title);
  }

  return (
    <Segment vertical>
      <Card centered>
        <Card.Content>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            floated="left"
            size="small"
          />
          <Card.Header as="h2">{name}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Form>
            <Form.Field>
              <Input
                placeholder="..."
                onChange={(e) => setInputText(e.target.value)}
              />
            </Form.Field>
            <Button primary onClick={onClick}>
              Go
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </Segment>
  );
}

export default App;

import React, {useState} from "react";
import {Button, Card, Form, Input, Segment} from "semantic-ui-react";
import {Header} from "./Header";

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
        <Header name={name}/>
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

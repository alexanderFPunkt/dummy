import {Card, Image} from "semantic-ui-react";
import React from "react";

export function Header(props) {
  return <Card.Content>
    <Image
      src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
      floated="left"
      size="small"
    />
    <Card.Header as="h2">{props.name}</Card.Header>
  </Card.Content>;
}

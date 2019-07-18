import React, { Component } from "react";
import { Container, Button, Icon, Input } from "semantic-ui-react";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Container textAlign="center" className="globalContainer">
          <Button icon className="globalTrash">
            <Icon name="trash" />
          </Button>
          <Input
            icon="search"
            iconPosition="left"
            placeholder="Search mail"
            className="searchBar"
          />
        </Container>
      </div>
    );
  }
}

export default App;

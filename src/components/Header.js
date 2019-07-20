import React, { Component } from "react";
import { Container, Button, Icon, Input } from "semantic-ui-react";

function Header() {
  return (
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
      <Button icon className="leftPagination">
        <Icon name="angle left" />
      </Button>
      <Button icon className="rightPagination">
        <Icon name="angle right" />
      </Button>
      <span>1 - 50 of 238</span>
    </Container>
  );
}

export default Header;

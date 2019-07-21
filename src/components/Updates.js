import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Updates extends Component {
  componentDidMount() {
    let { props } = this;
    props.selected(props.location.pathname);
  }

  render() {
    return (
      <Container textAlign="center" className="globalContainer" fluid>
        This is the updates page!
      </Container>
    );
  }
}

export default Updates;

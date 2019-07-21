import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Primary extends Component {
  componentDidMount() {
    let { props } = this;
    props.selected(props.location.pathname);
  }

  render() {
    return (
      <Container textAlign="center" className="globalContainer" fluid>
        This is the primary page!
      </Container>
    );
  }
}

export default Primary;

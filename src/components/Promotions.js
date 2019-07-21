import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Promotions extends Component {
  componentDidMount() {
    let { props } = this;
    props.selected(props.location.pathname);
  }

  render() {
    return (
      <Container textAlign="center" className="globalContainer" fluid>
        This is the promotions page!
      </Container>
    );
  }
}

export default Promotions;

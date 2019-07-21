import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class Social extends Component {
  componentDidMount() {
    let { props } = this;
    props.selected(props.location.pathname);
  }

  render() {
    return (
      <Container textAlign="center" className="globalContainer" fluid>
        This is the social page!
      </Container>
    );
  }
}

export default Social;

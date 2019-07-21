import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import Faker from "faker";

class Primary extends Component {
  componentDidMount() {
    let { props } = this;
    props.selected(props.location.pathname);
    let arr = [];
    for (let i = 0; i < 5; i++) {
      const user = {
        name: Faker.name.findName(),
        message: Faker.lorem.sentence(),
        date: Faker.date.past()
      };
      arr.push(user);
      console.log(user.date);
    }
    //use faker
    //set up redux
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

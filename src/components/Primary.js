import React, { Component } from "react";
import { Container, List } from "semantic-ui-react";
import { connect } from "react-redux";
import Faker from "faker";
// import EmailItem component
import EmailItems from "./EmailItems.js";
// import action creator
import { createEmailList } from "../actions/index.js";
// import helper function
import { formatDate } from "../helpers/utils.js";

class Primary extends Component {
  generateEmails() {
    const { startPagination, endPagination, emails } = this.props;
    // loop through from startPag to endPag.
    const slicedEmails = emails.slice(startPagination - 1, endPagination);
    return slicedEmails.map((email, index) => (
      <EmailItems
        name={email.name}
        message={email.message}
        date={email.date}
        key={"person" + index}
      />
    ));
  }

  componentDidMount() {
    let { props } = this;
    props.selected(props.location.pathname);
    for (let i = 0; i < 255; i++) {
      const user = {
        name: Faker.name.findName(),
        message: Faker.lorem.sentence(),
        date: formatDate(Faker.date.past())
      };
      this.props.dispatch(createEmailList(user));
    }
  }

  render() {
    return (
      <Container
        textAlign="left"
        className="globalContainer emailContainer"
        fluid
      >
        <List divided relaxed>
          {this.generateEmails()}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = ({ startPagination, endPagination, emails }) => {
  return { startPagination, endPagination, emails };
};

export default connect(mapStateToProps)(Primary);

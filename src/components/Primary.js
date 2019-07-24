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
    const { startPagination, endPagination, emails, theKeyWord } = this.props;
    if (theKeyWord) {
      // check if email.name or email.message contains the string
      const filtered = emails.filter(
        email =>
          email.name.includes(theKeyWord) || email.message.includes(theKeyWord)
      );
      // send to redux store
      // if array length is 0, return message 'No messages matched your search'
      if (filtered.length === 0) {
        return <h2 className="emailList">No messages matched your search.</h2>;
      } else {
        const slicedEmails = filtered.slice(startPagination - 1, endPagination);
        return slicedEmails.map((email, index) => (
          <EmailItems
            name={email.name}
            message={email.message}
            date={email.date}
            key={email.message + email.name + index}
          />
        ));
      }
    } else {
      // loop through from startPag to endPag.
      const slicedEmails = emails.slice(startPagination - 1, endPagination);
      return slicedEmails.map((email, index) => (
        <EmailItems
          name={email.name}
          message={email.message}
          date={email.date}
          key={email.message}
        />
      ));
    }
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

const mapStateToProps = ({
  startPagination,
  endPagination,
  emails,
  theKeyWord
}) => {
  return { startPagination, endPagination, emails, theKeyWord };
};

export default connect(mapStateToProps)(Primary);

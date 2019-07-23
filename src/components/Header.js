import React, { Component } from "react";
import { Container, Button, Icon, Input } from "semantic-ui-react";
import { connect } from "react-redux";
// import action creator
import { updatePagination, deleteEmail } from "../actions/index.js";

class Header extends Component {
  leftArrowClick = () => {
    let { emails } = this.props;
    this.props.dispatch(
      updatePagination({ start: -50, end: -50, reference: emails.length })
    );
  };

  rightArrowClick = () => {
    let { emails } = this.props;
    this.props.dispatch(
      updatePagination({ start: 50, end: 50, reference: emails.length })
    );
  };
  
  globalDelete = () => {
	  let { selectedEmails, dispatch } = this.props;
	  selectedEmails.forEach(email => {
		  dispatch(deleteEmail({name: email.name, message: email.message}));
	  });
  };

  render() {
    console.log(this.props);
    return (
      <Container textAlign="center" className="globalContainer">
        <Button icon className="globalTrash" onClick={this.globalDelete}>
          <Icon name="trash" />
        </Button>
        <Input
          icon="search"
          iconPosition="left"
          placeholder="Search mail"
          className="searchBar"
        />
        <Button
          icon
          className="leftPagination"
          disabled={this.props.startPagination === 1}
          onClick={this.leftArrowClick}
        >
          <Icon name="angle left" />
        </Button>
        <Button
          icon
          className="rightPagination"
          disabled={this.props.endPagination === this.props.emails.length}
          onClick={this.rightArrowClick}
        >
          <Icon name="angle right" />
        </Button>
        <span>
          {this.props.startPagination} - {this.props.endPagination} of{" "}
          {this.props.emails.length}
        </span>
      </Container>
    );
  }
}

const mapStateToProps = ({
  startPagination,
  endPagination,
  emails,
  selectedEmails
}) => {
  return { startPagination, endPagination, emails, selectedEmails };
};

export default connect(mapStateToProps)(Header);

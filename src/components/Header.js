import React, { Component } from "react";
import { Container, Button, Icon, Input } from "semantic-ui-react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    console.log(this.props);
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
        <Button
          icon
          className="leftPagination"
          disabled={this.props.startPagination === 1}
        >
          <Icon name="angle left" />
        </Button>
        <Button
          icon
          className="rightPagination"
          disabled={this.props.endPagination === this.props.emails.length}
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

const mapStateToProps = ({ startPagination, endPagination, emails }) => {
  return { startPagination, endPagination, emails };
};

export default connect(mapStateToProps)(Header);

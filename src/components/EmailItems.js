import React, { Component } from "react";
import { List, Checkbox, Button, Icon } from "semantic-ui-react";
import "../App.css";
import { connect } from "react-redux";
// import action creator
import {
  deleteEmail,
  selectedEmail,
  deselectedEmail
} from "../actions/index.js";

class EmailItems extends Component {
  state = {
    checked: false,
    index: null
  };

  handleCheckboxChange = event => {
    const { name, message, date, emails } = this.props;
    this.setState(prevstate => ({ checked: !prevstate.checked }));

    let index = emails.findIndex(
      email => email.name === name && email.message === message
    );
    this.setState({ index });
    if (!this.state.checked) {
      this.props.dispatch(selectedEmail({ index }));
    } else {
      this.props.dispatch(deselectedEmail({ index }));
    }
  };

  deleteEmail = () => {
    let { name, message } = this.props;
    this.setState({ checked: false });
    this.props.dispatch(
      deleteEmail({ name, message, index: this.state.index })
    );
  };

  render() {
    return (
      <List.Item className="emailList">
        <List.Content>
          <Checkbox
            checked={this.state.checked}
            label={this.props.name}
            onChange={this.handleCheckboxChange}
          />
          <span className="emailMessage">{this.props.message}</span>
          <span className="emailDate">{this.props.date}</span>
          {this.state.checked && (
            <Button icon className="globalTrash" onClick={this.deleteEmail}>
              <Icon name="trash" />
            </Button>
          )}
        </List.Content>
      </List.Item>
    );
  }
}

const mapStateToProps = ({ selectedEmails, emails }) => {
  return { selectedEmails, emails };
};

export default connect(mapStateToProps)(EmailItems);

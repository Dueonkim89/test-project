import React, { Component } from "react";
import { List, Checkbox, Button, Icon } from "semantic-ui-react";
import "../App.css";

class EmailItems extends Component {
  state = {
    checked: false
  };

  handleCheckboxChange = event => {
    this.setState(prevstate => ({ checked: !prevstate.checked }));
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
            <Button icon className="globalTrash">
              <Icon name="trash" />
            </Button>
          )}
        </List.Content>
      </List.Item>
    );
  }
}

export default EmailItems;

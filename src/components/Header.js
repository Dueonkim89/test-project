import React, { Component } from "react";
import { Container, Button, Icon, Input } from "semantic-ui-react";
import { connect } from "react-redux";
// import action creator
import { updatePagination, deleteEmail, searchKeyword } from "../actions/index.js";

class Header extends Component {
	
  state = {value: '', filteredResults: undefined};
	
  leftArrowClick = () => {
    let { emails, theKeyWord } = this.props;
	if (this.state.filteredResults) {
		this.props.dispatch(
		  updatePagination({ start: -50, end: 50, reference: this.state.filteredResults})
		);			
	} else {
		this.props.dispatch(
		  updatePagination({ start: -50, end: 50, reference: emails.length })
		);		
	}
  };

  rightArrowClick = () => {
    let { emails, theKeyWord } = this.props;
	if (this.state.filteredResults) {
		this.props.dispatch(
		  updatePagination({ start: 50, end: 50, reference: this.state.filteredResults})
		);			
	} else {
		this.props.dispatch(
		  updatePagination({ start: 50, end: 50, reference: emails.length })
		);		
	}
  };
  
  globalDelete = () => {
	  let { selectedEmails, dispatch } = this.props;
	  selectedEmails.forEach(email => {
		  dispatch(deleteEmail({name: email.name, message: email.message}));
	  });
  };
  
  searchEmails = () => {
	  const {dispatch, emails, theKeyWord} = this.props;
	  const {value} = this.state;
	  dispatch(searchKeyword({keyword: this.state.value}));
	  if (!value) {
		this.setState({filteredResults: undefined});
		// reset pagination back to default 
		return;
	  }
	  const filtered = emails.filter(email => email.name.includes(value) || email.message.includes(value));
	  // set new pagination parameters if greater than 50
	  this.setState({filteredResults: filtered.length});
  }
  
  generatePagination = () => {
	const {filteredResults} = this.state;
    if (!this.props.theKeyWord) {
		return (
		<span>
		  {this.props.startPagination} - {this.props.endPagination} of{" "}
		  {this.props.emails.length}
		</span> );
	} else if (filteredResults > 0 && filteredResults <= 50) {
		// leave alone.
		return (
		 <span>
		 {1} - {filteredResults} of {filteredResults}
		 </span>
		);
	} else if (filteredResults > 50) {
		//work on
		return (
		 <span>
		 {1} - {50} of {filteredResults}
		 </span>
		);		
	}
  }  
  
  
  render() {
    console.log(this.props.startPagination, this.props.endPagination);
    return (
      <Container textAlign="center" className="globalContainer">
        <Button icon className="globalTrash" onClick={this.globalDelete}>
          <Icon name="trash" />
        </Button>
		
        <Button
          icon
          className="searchButton"
          onClick={this.searchEmails}
        >		
		  <Icon name="search" />
        </Button>
        <Input
		  value={this.state.value}
          placeholder="Search mail"
          className="searchBar"
		  onChange={(event) => this.setState({value: event.target.value})}
        />
        <Button
          icon
          className="leftPagination"
		  style={{display: this.state.filteredResults <= 50 ? 'none' : '' }}
          disabled={this.props.startPagination === 1}
          onClick={this.leftArrowClick}
        >
          <Icon name="angle left" />
        </Button>
        <Button
          icon
          className="rightPagination"
		  style={{display: this.state.filteredResults <= 50 ? 'none' : '' }}
          disabled={this.props.endPagination === this.props.emails.length}
          onClick={this.rightArrowClick}
        >
          <Icon name="angle right" />
        </Button>
		{this.generatePagination()}
      </Container>
    );
  }
}

const mapStateToProps = ({
  startPagination,
  endPagination,
  emails,
  selectedEmails,
  theKeyWord
}) => {
  return { startPagination, endPagination, emails, selectedEmails, theKeyWord };
};

export default connect(mapStateToProps)(Header);

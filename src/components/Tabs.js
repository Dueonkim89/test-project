import React, { Component } from "react";
import { Container, Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages to route to
import Primary from "./Primary.js";
import Social from "./social.js";
import Promotions from "./Promotions.js";
import Updates from "./Updates.js";

class Tabs extends Component {
  state = {
    selected: null,
    active: false
  };

  tabChosen = tab => {
    this.setState({ selected: tab });
  };

  render() {
    return (
      <Container textAlign="center" className="globalContainer" fluid>
        <Router>
          <Link to="/">
            <Button
              className={`ui button tabs ${
                this.state.selected === "/" ? "primary" : ""
              }`}
            >
              Primary
            </Button>
          </Link>
          <Link to="/social">
            <Button
              className={`ui button tabs ${
                this.state.selected === "/social" ? "primary" : ""
              }`}
            >
              Social
            </Button>
          </Link>
          <Link to="/promotions">
            <Button
              className={`ui button tabs ${
                this.state.selected === "/promotions" ? "primary" : ""
              }`}
            >
              Promotions
            </Button>
          </Link>
          <Link to="/updates">
            <Button
              className={`ui button tabs ${
                this.state.selected === "/updates" ? "primary" : ""
              }`}
            >
              Updates
            </Button>
          </Link>

          <Route
            exact
            path="/"
            render={props => <Primary {...props} selected={this.tabChosen} />}
          />
          <Route
            path="/social"
            render={props => <Social {...props} selected={this.tabChosen} />}
          />
          <Route
            path="/promotions"
            render={props => (
              <Promotions {...props} selected={this.tabChosen} />
            )}
          />
          <Route
            path="/updates"
            render={props => <Updates {...props} selected={this.tabChosen} />}
          />
        </Router>
      </Container>
    );
  }
}

export default Tabs;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import Landing from "./Landing";
import Header from "./Header";
import Surveys from "./Surveys";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className='container'>
        <Router>
          <Header />
          <Route path='/' exact component={Landing} />
          <Route path='/surveys' exact component={Surveys} />
        </Router>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { user: state.user };
// };
export default connect(
  null,
  actions
)(App);

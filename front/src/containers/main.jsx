import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import AddCandidate from './AddCandidate';
import AdminView from './adminView';
import NavBar from '../components/NavBar';
import Profile from '../containers/Profile'
import Winners from './Winners'
export default class Main extends React.Component {
  // componentDidMount() {};


  render() {
    return (
      <div>
        <NavBar/>
        <section>
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route exact path="/addCandidate" render={({ history }) => (<AddCandidate history={history} />)} />
            <Route exact path="/profile/:candID" render={({ history , match }) => (<Profile history={history} idCand={match.params.candID} />)} />
            <Route exact path="/adminView" render={({ history }) => (<AdminView history={history} />)} />
            <Route exact path="/winners" render={({ history }) => (<Winners history={history} />)} />
            {/* <Redirect from="/" to="/home" /> */}
          </Switch>
        </section>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     isLogin: state.login.isLogin,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchLogin: () => dispatch(fetchLogin()),
//     fetchShopcart: id => dispatch(fetchShopcart(id)),
//     setCart: cart => dispatch(setCart(cart)),
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Main);

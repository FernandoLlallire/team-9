import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import AddCandidate from '../containers/AddCandidate'
import AdminView from '../containers/AdminView'
import NavBar from '../components/NavBar'

export default class Main extends React.Component {
  componentDidMount() {};


  render() {
    return (
      <div>
        <NavBar/>
        <section>
          <Switch>
            <Route path="/home" render={() => <Home />} />
            <Route exact path="/addCandidate" render={({ history }) => (<AddCandidate history={history} />)} />
            <Route exact path="/adminView" render={({ history }) => (<AdminView history={history} />)} />
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

import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import {  fetchWinners } from '../store/actions/actions'


class AdminView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            selectedNames: [],
        };
        this.onClick= this.onClick.bind(this);
        this.filter=this.filter.bind(this);
    }

    componentDidMount(){
        this.props.fetchWinners();
    }

    render() {

        return (
            <div class="card-deck">
            <div class="card">
              <img class="card-img-top rounded-circle" src="img1.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <h5 class="card-title">Ana Perez</h5>
                <p class="card-text">Edad: 30</p>
                <p class="card-text">Area: Software</p>
                <a href = "https://www.facebook.com" class="fa fa-facebook"></a>
                 <a href="https://www.twitter.com" class="fa fa-twitter"></a>
                <a href="https://www.gmail.com" class = "fa fa-google"></a>
                <a href="https://www.linkedin.com" class="fa fa-linkedin"></a>
              </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        winners: state.adminReducer.winners
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchWinners: () => dispatch(fetchWinners()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdminView);

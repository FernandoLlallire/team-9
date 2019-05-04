import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AddCandidateComp from '../components/AddCandidateComp'

export default class AddCandidate extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        status: 'New',
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange (e) {
      console.log("===============> STATE ", this.state )
      this.setState(
        { [e.target.name]: e.target.value });
    }

    handleSubmit (e) {
      e.preventDefault();
      if (!this.state.name || !this.state.surname || !this.state.email || !this.state.telNumber) {
        this.setState({ message: 'You must complete required fields in order to continue.' });
      } else if (this.state.email.indexOf('@') === -1 || this.state.email.indexOf('.com') === -1) {
        this.setState({ message: 'Invalid Email format' });
      } else {
        for (let i = 0; i < this.props.candidates.length; i += 1) {
          if (this.props.candidates[i].email === this.state.email) {
            return this.setState({ message: 'The email entered is already in use' });
          }
        }
        this.props.createCandidate(this.state)
          .then(() => this.setState({ message: 'Successfully saved Candidate' }));
      }
    }

    render () {
      console.log('Url', this.state.status);
      return (
        <AddCandidateComp
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      );
    }
  }
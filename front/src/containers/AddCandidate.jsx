import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import AddCandidateComp from '../components/AddCandidateComp'
import { saveCandidate } from '../store/actions/actions'

class AddCandidate extends React.Component {
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
      if (!this.state.nombre || !this.state.apellido || !this.state.email || !this.state.telefono) {
        this.setState({ message: 'You must complete required fields in order to continue.' });
      } else if (this.state.email.indexOf('@') === -1 || this.state.email.indexOf('.com') === -1) {
        this.setState({ message: 'Invalid Email format' });
      } else {
        // for (let i = 0; i < this.props.candidates.length; i += 1) {
        //   if (this.props.candidates[i].email === this.state.email) {
        //     return this.setState({ message: 'The email entered is already in use' });
        //   }
        }
        this.props.saveCandidate(this.state)
          .then(() => this.setState({ message: 'Successfully saved Candidate' }));
      
    }

    render () {
      return (
        <AddCandidateComp
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      );
    }
  }

  function mapStateToProps(state) {
  return {
    probando: state.adminReducer.nothingForNow,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveCandidate: (candidate) => dispatch(saveCandidate(candidate))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCandidate);
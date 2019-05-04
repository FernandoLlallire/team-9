import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CandidateTable from '../components/CandidateTable'
import { saveCandidate } from '../store/actions/actions'

class AdminView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'nada',
            candidates: [ { nombre: "Sandra", 
                        apellido:"Gomez", 
                        telefono: "11112222",
                        mail: "sandra@mail.com",
                        extracto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
                      { nombre: "Carla", 
                        apellido:"Perez", 
                        telefono: "113245222",
                        mail: "carla@mail.com",
                        extracto: "quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo" },
                      { nombre: "Marina", 
                        apellido:"GArcia", 
                        telefono: "4444455",
                        mail:"marina@mail.com",
                        extracto: " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit " }, 
                      { nombre: "Perla", 
                        apellido:"Mercado", 
                        telefono: "9983663",
                        mail:"perla@mail.com" },
                      { nombre: "Daniela", 
                        apellido:"Gonzalez", 
                        telefono: "15141432",
                        mail:"daniela@mail.com" }]
        };
    }

    render() {
        return (
            <div>
                <h1>Administradora</h1>
                <CandidateTable
                    candidates={this.state.candidates}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        probando: state.adminReducer.nothingForNow
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
)(AdminView);
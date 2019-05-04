import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CandidateTable from '../components/CandidateTable'
import { saveCandidate, fetchCandidates, setWinners } from '../store/actions/actions'

class AdminView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            selectedNames: [],
            candidates: [ { id: 1, 
                        nombre: "Sandra", 
                        apellido:"Gomez", 
                        telefono: "11112222",
                        mail: "sandra@mail.com",
                        extracto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
                      { id: 2, 
                        nombre: "Carla", 
                        apellido:"Perez", 
                        telefono: "113245222",
                        mail: "carla@mail.com",
                        extracto: "quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo" },
                      { id: 3, 
                        nombre: "Marina", 
                        apellido:"GArcia", 
                        telefono: "4444455",
                        mail:"marina@mail.com",
                        extracto: " Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit " }, 
                      { id: 4, 
                        nombre: "Perla", 
                        apellido:"Mercado", 
                        telefono: "9983663",
                        mail:"perla@mail.com" },
                      { id: 5, 
                        nombre: "Daniela", 
                        apellido:"Gonzalez", 
                        telefono: "15141432",
                        mail:"daniela@mail.com" }]
        };
        this.onClick= this.onClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchCandidates();
    }

    onClick(candidateID, option, nombre){
        if(option==="select")
            {
            let auxArray= this.state.selected;
            let auxArrayNames= this.state.selectedNames;
            auxArray.push(candidateID);
            auxArrayNames.push(nombre);
            this.setState({ selected: auxArray, selectedNames: auxArrayNames });
        }else{
            this.props.history.push(`/profile/${candidateID}`)
        }
    }

    // setWinners(winners){
    //     this.props.setWinners(winners);
    // }

    render() {
        return (
            <div>
                <h1>Administradora</h1>
                <CandidateTable
                    candidates={this.state.candidates}
                    onClick={this.onClick}
                    seleccionadas={this.state.selected}
                    nombresSelec={this.state.selectedNames}
                    setWinners={this.props.setWinners}
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
        saveCandidate: (candidate) => dispatch(saveCandidate(candidate)),
        fetchCandidates: () => dispatch(fetchCandidates()),
        setWinners: (winners) => dispatch(setWinners(winners))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdminView);
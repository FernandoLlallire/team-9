import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import CandidateTable from '../components/CandidateTable'
import { saveCandidate, fetchCandidates, setWinners, setCandidates } from '../store/actions/actions'

var dataPie = [
    {
        value: 300,
        color:"#9417b7",
        highlight: "#FF5A5E",
        label: "18 a 25"
    },
    {
        value: 50,
        color: "#34ad58",
        highlight: "#5AD3D1",
        label: "25 a 30"
    },
    {
        value: 100,
        color: "#3962cc",
        highlight: "#FFC870",
        label: "30 a 35"
    }
]

var data = {
            labels: ["IT", "Ciencias", "Ingenieria"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(191, 63, 127)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80,]
                }
            ]
        };

var LineChart = require("react-chartjs").Line;
var PieChart = require("react-chartjs").Pie;


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
        this.filter=this.filter.bind(this);
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
    filter(parametro){
            let auxArray= this.props.candidatas;
            let arrFiltrado=[];
            for (let i=0; i<auxArray.length; i++){
                if (auxArray[i].campo===parametro){
                    arrFiltrado.push(auxArray[i]);
                }
            }
            this.props.setCandidates(arrFiltrado);

    }
    // setWinners(winners){
    //     this.props.setWinners(winners);
    // }

    render() {

        return (
            <div className="graphContainer">
                  <div className="row">
                    <div className="col-sm">
                        <h3 className="text-center textBeforeGraph"> Chicas por area profesional</h3>
                        <LineChart data={data} width="600" height="250"/>
                    </div>
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                      <h3 className="text-center textBeforeGraph"> Chicas por edad </h3>
                      <PieChart data={dataPie} width="600" height="250" />
                    </div>
                  </div>
                <div>
            <h1 className="text-center titleTable">Seleccion de reconocidas</h1>
                </div>
                <CandidateTable
                    candidates={this.props.candidatas}
                    onClick={this.onClick}
                    seleccionadas={this.state.selected}
                    nombresSelec={this.state.selectedNames}
                    setWinners={this.props.setWinners}
                    filter={this.filter}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        candidatas: state.adminReducer.candidatos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveCandidate: (candidate) => dispatch(saveCandidate(candidate)),
        fetchCandidates: () => dispatch(fetchCandidates()),
        setWinners: (winners) => dispatch(setWinners(winners)),
        setCandidates: (candidatas) => dispatch(setCandidates(candidatas))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdminView);

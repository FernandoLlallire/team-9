import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class CandidateTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  render() {
    return (

      <div>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filtrar
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button class="dropdown-item" onClick={()=>this.props.filter()}>Ciencia</button>
            <a class="dropdown-item" href="#">Matemática</a>
            <a class="dropdown-item" href="#">Ingeniería</a>
            <a class="dropdown-item" href="#">Tecnoglía</a>
          </div>
        </div>

        <table className="table">
          <thead >
            <tr className="trTable" >
              <th scope="col" className='tableHeading'>NOMBRE</th>
              <th scope="col" className='tableHeading'>TELEFONO</th>
              <th scope="col" className='tableHeading'>MAIL</th>
              <th scope="col" className='tableHeading'>CAMPO</th>
              <th scope="col" className='tableHeading'>EXTRACTO</th>
            </tr>
          </thead>

          <tbody >
            {this.props.candidates && this.props.candidates.map((candidate, index) => {
              return (
                <tr key={index++} className={index % 2 ? 'grey' : 'white'}>
                  <th style={{ verticalAlign: 'middle' }} className='tableHeading' scope="row" onClick={() => this.props.onClick(candidate.id)}>{candidate.nombre + ' ' + candidate.apellido}</th>
                  <td style={{ verticalAlign: 'middle' }} className='tableHeading '>
                    {candidate.telefono}
                  </td>
                  <td style={{ verticalAlign: 'middle' }} className='tableHeading '>
                    {candidate.mail}
                  </td>
                  <td style={{ verticalAlign: 'middle' }} className='tableHeading '>
                    {candidate.campo}
                  </td>
                  <td style={{ verticalAlign: 'middle' }} className='tableHeading '>
                    {candidate.extracto}
                  </td>
                  <td>
                    <button type="button" className="btn btn-success btn-sm" onClick={() => this.props.onClick(candidate.id, "select", candidate.nombre + ' ' + candidate.apellido)}>Seleccionar</button>
                  </td>
                </tr>
              )
                ;
              // };
            })}
          </tbody>
        </table>
        <div className="justify-content-center row buttonSelectsContainer">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> Ver seleccionadas</button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title textModal" id="exampleModalLabel">Candidatas seleccionadas</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body textModal">
                  Candidatas seleccionadas:
              <ul>
                    {this.props.nombresSelec.map(candidata =>
                      (candidata + " ")
                    )}
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary textModal" data-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-primary textModal" data-dismiss="modal"
                    onClick={() => {
                      console.log(this.props.seleccionadas)
                      this.props.setWinners(this.props.seleccionadas);
                    }}>Ganadoras</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

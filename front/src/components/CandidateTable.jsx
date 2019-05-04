import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class CandidateTable extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  render () {
    return (
      <table className="table">
        <thead >
          <tr style={{ borderBottom: '5px solid #DE411B', borderTop: '5px solid #DE411B' }}>
            <th scope="col" className='tableHeading'>NOMBRE</th>
            <th scope="col" className='tableHeading'>TELEFONO</th>
            <th scope="col" className='tableHeading'>MAIL</th>
            <th scope="col" className='tableHeading'>EXTRACTO</th>
          </tr>
        </thead>

        <tbody >
          {this.props.candidates && this.props.candidates.map( (candidate, index) => {
            console.log('soy de la tablaaaa', candidate);
            return (
              <tr key={index++} className={index % 2 ? 'grey' : 'white'}>
                <th style={{ verticalAlign: 'middle' }} className='tableHeading ' scope="row">{candidate.nombre + ' ' + candidate.apellido}</th>
                <td style={{ verticalAlign: 'middle' }} className='tableHeading '>
                  {candidate.telefono}
                </td>
                <td style={{ verticalAlign: 'middle' }} className='tableHeading '>
                  {candidate.mail}
                </td>
                <td style={{ verticalAlign: 'middle' }} className='tableHeading '>
                  {candidate.extracto}
                </td>
                <td style={{ verticalAlign: 'middle' }} className='tableHeading '>
                  {/* <a><img onClick={() => this.setState({ selected: candidate.id })} data-toggle="modal" data-target="#exampleModal" id='trashUser' src="/utils/garbage.svg" >
                  </img></a> */}
                  <button>seleccionar</button>
                  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title textModal" id="exampleModalLabel">Reconfirm</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body textModal">
                          Are you sure you want to delete this candidate?
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary textModal" data-dismiss="modal">Cancel</button>
                          <button type="button" className="btn btn-primary textModal" data-dismiss="modal"
                            onClick={() => {
                              this.props.onClickDelete(this.state.selected);
                            }}>Yes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )
            ;
            // };
          })}
        </tbody>
      </table>
    );
  };
}
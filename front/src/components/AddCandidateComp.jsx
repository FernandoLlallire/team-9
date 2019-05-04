import React from 'react';

const candidate = (props) => {
  return (
    <div>
      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{props.message && props.message}</p>
              </div>
              <div className="modal-footer">
                {/* { */}
                 <button type="button" onClick={() => props.onClick()} className="btn btn-lg" style={{ backgroundColor: '#DE411B' }} data-dismiss="modal" > { props.message === 'Successfully saved Candidate' ? 'Go to Candidates' : 'Go back' } </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="form-group form-control-lg row formUser" style={{ marginTop: '50px', padding: '20px' }}>
        <div className='col-lg-3'></div>
        <div className='col-lg-6 addUser'>
          <form onSubmit={props.onSubmit} className='formUser' >
            <h1 className='titHomeForms'>Agregar nueva candidata</h1>
            <small>(<b>*</b>) Campos requeridos</small>
            <p/>
            <div className="form-group " >
              <label htmlFor="lastName">* Nombre</label>
              <input onChange={props.onChange} type="text" className="form-control inputLogin" id="nombre" placeholder="nombre" name='nombre' />
            </div>
            <div className="form-group">
              <label htmlFor="firsstName">* Apellido</label>
              <input onChange={props.onChange} type="text" className="form-control inputLogin" id="apellido" placeholder="apellido" name='apellido' />
            </div>
            <div className="form-group">
              <label htmlFor="email">* Edad</label>
              <input onChange={props.onChange} type="text" className="form-control inputLogin" id="edad" placeholder="edad" name='edad' />
            </div>
            <div className="form-group">
              <label htmlFor="number">* e-mail</label>
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="email" placeholder="e-mail" name='email' />
            </div>
            <div className="form-group">
              <label htmlFor="number">* Teléfono</label>
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="telefono" placeholder="Mobile Number" name='telefono' />
            </div>
            <div className="form-group">
              <label htmlFor="number">* Rubro de ciencia/tecnología</label>
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="campo" placeholder="Mobile Number" name='campo' />
            </div>
            <div className="form-group">
              <label htmlFor="workExperince">Extracto</label>
              <textarea onChange={props.onChange} className="form-control inputLogin" id="WorkExperience" rows="3" name="extracto"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="number">* Teléfono aplicante</label>
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="telefono_tercero" placeholder="telefono tercero" name='telefono_tercero' />
            </div>
            <div className="form-group">
              <label htmlFor="number">* e-mail aplicante</label>
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="mail_tercero" placeholder="emailTercero" name='telefono_tercero' />
            </div>
            <div className="form-group">
              <label htmlFor="number">* Motivo</label>
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="motivo" placeholder="motivo" name='motivo_post' />
            </div>
            <div className="form-group">
              <label htmlFor="number">* Foto</label>
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="foto" placeholder="foto" name='foto' />
            </div>
            <div className="form-group">
              <label htmlFor="number">* Video</label>
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="video" placeholder="video" name='video' />
            </div>
            <div className="form-group">
              <label htmlFor="number">* Audio</label>
              <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="audio" placeholder="audio" name='audio' />
            </div>
            <div>
              <button onSubmit={props.onSubmit} type="submit" className="btn boton btn-lg botonLogin btn-primary" data-toggle="modal" data-target="#exampleModal">Add Applicant</button>
              {/* <button onClick={() => props.onClick()} className="btn boton btn-lg botonLogin btn-primary" >View All Candidates</button> */}
            </div>
          </form>

        </div>
        <div className='col-lg-3'></div>
      </div>
    </div>
  );
};

export default candidate;
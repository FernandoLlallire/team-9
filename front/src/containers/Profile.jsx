import React from 'react';
import { connect } from 'react-redux';
import { fetchCandidate } from '../store/actions/actions';

class Profile extends React.Component {
  
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchCandidate(this.props.idCand);
  }

render(){
  console.log("+===================> PROPS", this.props)
  return(
    <div className="profileBody">
      <div className=" dataProfileImageName row align-items-center justify-content-center">
        <div className="col-md-1">
        </div>
        <div className="containerImgProfile col-md-4">
          <img className="imgProfile rounded-circle" src="https://px.cdn.lanueva.com/032014/1511516318553.jpg" alt=""></img>
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-4">
          <h1 className="profileName">{this.props.candidata.nombre + " " + this.props.candidata.apellido}</h1>
          <h3 className="profileName">{this.props.candidata.campo}</h3>
          <div className="contaierSocialMedia">
            <a href="#" className="fa fa-facebook iconZise"></a>
            <a href="#" className="fa fa-twitter iconZise"></a>
            <a href="#" className="fa fa-google iconZise"></a>
            <a href="#" className="fa fa-linkedin iconZise"></a>
            <a href="#" className="fa fa-youtube iconZise"></a>
            <a href="#" className="fa fa-instagram iconZise"></a>
          </div>
        </div>
      </div>
      <div className="row descriptionProfile justify-content-center">
        <div className="col-md-10 ">
          <h4> Extracto </h4 >
          <p> {this.props.candidata.extracto} </p>
        </div>
      </div>
      <div className="row descriptionProfile justify-content-center align-items-center">
        <div className="col-md-5">
          <object classNAme= "youtubeProfile" data="https://www.youtube.com/embed/VYgzKZ3-TV8" width="560px" height="400px">
          </object>
        </div>
        <div className="col-md-4 justify-content-center align-items-center">
          <iframe className="sounCludElement" width="200px" height="100px" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/271188615&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
      </div>

    </div>
  );
}
}


function mapStateToProps(state) {
  return {
    candidata: state.adminReducer.candidata,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCandidate: (candID) => dispatch(fetchCandidate(candID))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

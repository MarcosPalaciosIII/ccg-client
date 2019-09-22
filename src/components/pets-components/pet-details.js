import React, { Component } from 'react';
import AuthService from '../../services/pet-service';

import './all-pets.css';


class PetDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petDetails: null
    };
    this.service = new AuthService();
  }

  componentDidMount() {
    // this.getPetDetails();
    this.setState({petDetails: this.getPetDetails()}, function() {
      console.log("state <<<< here >>>> ", this.state);
    });
  }

  getPetDetails() {
    console.log("pet id from details component >>>> ", this.props.location.state.onePet);
    this.service.petDetails(this.props.location.state.petId)
    .then(response => {
      console.log("this is the response for details >>>>>>>>>>> /////// ", response);
      this.setState({petDetails: response}, function() {
        console.log('this is the state after getting details %^%^%%^^%^%^%^^^%^ ', this.state);
        return response;
      });
    }).catch(err => console.log("error getting pet details ", err));
  }


  showPet() {
    // console.log("the props }}}}}}} ", this.props.location.state);

    console.log("the current state of things -------------- ", this.state.petDetails);

    return (
      <div class="petDetailsCard">
        <div>
          <div>
            <img src={this.state.petDetails.image} alt={this.state.petDetails.name} />
          </div>

          <div>
            <div>
              <h3><b>Name: {this.state.petDetails.name}</b></h3>
              <h3>Breed: {this.state.petDetails.breed}</h3>
            </div>

            <div>
              <h5>Type: {this.state.petDetails.type}</h5>
              <h5>Gender: {this.state.petDetails.sex}</h5>
              <h5>REF ID: {this.state.petDetails.refId}</h5>
              <h5>BirthDate: {this.state.petDetails.birthDate}</h5>
            </div>

            <div>
              <h5>Location: {this.state.petDetails.location}</h5>
            </div>
          </div>

        </div>
      </div>
    )


  };


  render() {
    return (
      <div>
        {this.state.petDetails && this.showPet()}

      </div>
    );
  }


}


export default PetDetails;

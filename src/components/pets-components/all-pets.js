import React, { Component } from 'react';
import AuthService from '../../services/pet-service';

import './all-pets.css';

import { Link } from 'react-router-dom';


class AllPets extends Component {
  constructor() {
    super();
    this.state = {
      allPets: [],
      location: "All",
      type: "All",
      breed: "All",
      gender: "All"
    };
    this.service = new AuthService();
  }



  componentDidMount() {
    this.setPets();
  }



  setPets() {
    this.service.getAllPets()
    .then(response => {
      this.setState({allPets: response});
    }).catch(err => console.log("error getting pets", err));
  }



  filterPets() {
    let filteredArray = [];
    // check if all filtered criteria meet in order to add pet to display list
    this.state.allPets.forEach(onePet => {
      if(onePet.location === this.state.location) {
        if(onePet.type === this.state.type || this.state.type === "All"){
          if(onePet.breed === this.state.breed || this.state.breed === "All") {
            if(onePet.sex === this.state.gender || this.state.gender === "All") {
              filteredArray.push(onePet);
            }
          }
        }
      } else if(onePet.type === this.state.type) {
        if(onePet.location === this.state.location || this.state.location === "All"){
          if(onePet.breed === this.state.breed || this.state.breed === "All") {
            if(onePet.sex === this.state.gender || this.state.gender === "All") {
              filteredArray.push(onePet);
            }
          }
        }
      } else if(onePet.breed === this.state.breed) {
        if(onePet.type === this.state.type || this.state.type === "All"){
          if(onePet.location === this.state.location || this.state.location === "All") {
            if(onePet.sex === this.state.gender || this.state.gender === "All") {
              filteredArray.push(onePet);
            }
          }
        }
      } else if(onePet.sex === this.state.gender) {
        if(onePet.type === this.state.type || this.state.type === "All"){
          if(onePet.breed === this.state.breed || this.state.breed === "All") {
            if(onePet.location === this.state.location || this.state.location === "All") {
              filteredArray.push(onePet);
            }
          }
        }
      }

    });

    return filteredArray;
  }



  showPets() {
    let theFilteredArray = this.state.allPets;
    if(this.state.location !== "All" || this.state.type !== "All" || this.state.breed !== "All" ||this.state.gender !== "All") {
      theFilteredArray = this.filterPets();
    }
    return theFilteredArray.map((onePet, i) => {
      return (
        <div class="petCard" key={i}>
          <Link to={{
            pathname: '/details',
            state: {
              petId: onePet._id
            }
          }} >
            <div>
            <div>
            <img src={onePet.image} alt={onePet.name} />
            </div>

            <div>
            <h5>{onePet.type} • {onePet.sex} • REF ID: {onePet.refId} • {onePet.birthDate}</h5>
            </div>

            <div>
            <h3><b>{onePet.name}</b> • <span>{onePet.breed}</span></h3>
            </div>

            <div>
            <h5 className="locationText"><img src="/images/locationWhite.png" alt="location icon" />Location: {onePet.location}</h5>
            </div>

            </div>
          </Link>
        </div>
      )
    });

  }




  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }



  showFilter() {
    return (
      <div className="filterSection">
        <div>
          <img src="/images/filter-icon.svg" alt="filter icon" />
          <h5> Filter By: </h5>
        </div>
        <div>
          <div>
            <h6>Location</h6>
            <select
            className="filterInput"
            name="location"
            onChange={(e) => {this.handleChange(e)}}
            value={this.state.location}
            >
            <option value="All">All</option>
            <option value="Miami">Miami</option>
            <option value="Hollywood">Hollywood</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Pembroke Pines">Pembroke Pines</option>
            <option value="Kendall">Kendall</option>
            </select>
          </div>

          <div>
            <h6>Pet Type</h6>
            <select
            className="filterInput"
            name="type"
            onChange={(e) => {this.handleChange(e)}}
            value={this.state.type}
            >
            <option value="All">All</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            </select>
          </div>

          <div>
            <h6>Breed</h6>
            <select
            className="filterInput"
            name="breed"
            onChange={(e) => {this.handleChange(e)}}
            value={this.state.breed}
            >
            <option value="All">All</option>
            <option value="American Bulldog">American Bulldog</option>
            <option value="Mini Australian Shepherd">Mini Australian Shepherd</option>
            <option value="Ragdoll">Ragdoll</option>
            <option value="Persian">Persian</option>
            <option value="Scottish Fold">Scottish Fold</option>
            <option value="Bengal">Bengal</option>
            <option value="Siberian Husky">Siberian Husky</option>
            <option value="Alaskan Malamute">Alaskan Malamute</option>
            </select>
          </div>

          <div>
            <h6>Gender</h6>
            <select
            className="filterInput"
            name="gender"
            onChange={(e) => {this.handleChange(e)}}
            value={this.state.gender}
            >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            </select>
          </div>

        </div>
      </div>
    )
  }



  render() {
    return (
      <div id="all-pets-main">
        <div>
          <h4> AVAILABLE </h4>
          <h2> PUPPIES </h2>
        </div>
        <div>
        {this.showFilter()}
        </div>
        <div>
          {this.showPets()}
        </div>
      </div>
    );
  }


}


export default AllPets;

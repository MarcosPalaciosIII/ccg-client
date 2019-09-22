import React, {Component} from 'react';
// import logo from './logo.svg';
import AuthService from './services/pet-service';

import './App.css';

import { Switch, Route } from "react-router-dom";

import Navbar from './components/navbar';
import AllPets from './components/pets-components/all-pets';
import PetDetails from './components/pets-components/pet-details';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPets: null
    };
    this.service = new AuthService();
  }


render(){

  let getAllThePets = async () => {
    let allPets = await this.service.getAllPets()
    this.setState({allPets: this.allpets})
  }
  return (
    <div className="App">
      {getAllThePets}

      <Navbar />


      <Switch>
        <Route exact path="/" render={() => <AllPets allThePets={this.state.allPets}/>} />
        <Route exact path="/details" component={PetDetails} />
      </Switch>
    </div>
  );
}


}

export default App;

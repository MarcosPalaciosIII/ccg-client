import React, {Component} from 'react';
// import logo from './logo.svg';
import AuthService from './services/pet-service';

import './App.css';

import { Switch, Route } from "react-router-dom";

import Navbar from './components/navbar';
import AllPets from './components/pets-components/all-pets';
import PetDetails from './components/pets-components/pet-details';
import Seed from './components/pets-components/seed';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPets: null
    };
  }


render(){
  return (
    <div className="App">

      <Navbar />


      <Switch>
        <Route exact path="/" render={() => <AllPets allThePets={this.state.allPets}/>} />
        <Route exact path="/details" component={PetDetails} />
        <Route exact path="/seed" component={Seed} />
      </Switch>
    </div>
  );
}


}

export default App;

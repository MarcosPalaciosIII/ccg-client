import React, { Component } from 'react';
import AuthService from '../../services/pet-service';


class AllPets extends Component {
  render() {
    let service = new AuthService();

    let seed = async () => {
      try {
        let seeding = await service.petSeed();
        console.log("seeding success >>>>> ", seeding);
        return true
      } catch(err) {console.log("Seeding Error <<<<>>>><<<<>>>> ", err); return false}
    }

    return (
      <div>
        {seed() && "Seeding Complete, Check Console For Results"}
      </div>
    );
  }


}


export default AllPets;


import axios from 'axios';

class AuthService {
constructor() {
  let service = axios.create({
    baseURL:
    process.env.NODE_ENV === 'production' ? '/pets' : 'http://localhost:5000/pets',
    withCredentials: true
  });
  this.service = service;
}


  getAllPets = () => {
    return this.service.get('/')
    .then(response => response.data);
  };

  addPet = data => {
    return this.service.post('/add', {data})
    .then(response => response.data);
  };


  petDetails = petId => {
    return this.service.get(`/details/${petId}`)
    .then(response => response.data);
  };

  petSeed = () => {
    console.log("seeding db");
    return this.service.get(`/seed`)
    .then(response => response.data);
  };

}

export default AuthService;

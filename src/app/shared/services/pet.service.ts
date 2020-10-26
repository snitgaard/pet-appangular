import { Injectable } from '@angular/core';
import {Pet} from '../model/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  id = 1;
  pets: Pet[];
  constructor() {
    this.pets = [
      {
        id: this.id++, name: 'Johnny Bravo', color: 'Yellow',
        previousOwner: 'Obama', price: 1000, type: 'Dog'
      },
      {
        id: this.id++, name: 'Obama', color: 'Hmm',
        previousOwner: 'Johnny Bravo', price: 15000, type: 'Cat'
      }];
  }
  getPetById(id)
  {
    return this.pets.find(pet => pet.id === id);
  }
  getPets(): Pet[]
  {
    return this.pets;
  }

  addPet(pet: Pet)
  {
    pet.id = this.id++;
    this.pets.push(pet);
  }

}

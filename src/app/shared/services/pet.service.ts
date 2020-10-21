import { Injectable } from '@angular/core';
import {Pet} from '../model/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: Pet[];
  constructor() {
    this.pets = [
      {
        id: 1, name: 'Johnny Bravo', color: 'Yellow',
        previousOwner: 'Obama', price: 1000, type: 'Dog'
      },
      {
        id: 2, name: 'Obama', color: 'Hmm',
        previousOwner: 'Johnny Bravo', price: 15000, type: 'Cat'
      }];
  }
  getPets(): Pet[]
  {
    return this.pets;
  }
  addPet(pet: Pet)
  {
    this.pets.push(pet);
  }

}

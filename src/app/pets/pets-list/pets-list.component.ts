import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/model/Pet';
import {PetService} from '../../shared/services/pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[] = [];
  constructor(private petService: PetService) {
  }

  ngOnInit(){
    this.pets = this.petService.getPets();
  }

  addPet() {
    this.petService.addPet({
      name: 'New person',
      color: 'black',
      type: 'Dog',
      price: 1205,
      previousOwner: 'Johnny',
      id: 3
    });
  }
}

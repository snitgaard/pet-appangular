import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/model/Pet';
import {PetService} from '../../shared/services/pet.service';
import {AuthGuard} from '../../guards/auth.guard';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[] = [];
  constructor(private petService: PetService, private authGuard: AuthGuard) {
  }

  ngOnInit() {
    this.refresh();
  }

  addPet() {
    //data static for now
  }

  refresh() {
    this.authGuard.canActivate();
    this.petService.getPets().subscribe(listOfPets => {
      this.pets = listOfPets;
    });
  }
  delete (id: number) {
    this.petService.deletePet(id)
      .subscribe(message => {
        console.log('Deleted Pet: ' + message);
        this.refresh();
      });
  }
}

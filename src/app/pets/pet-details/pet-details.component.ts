import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/model/Pet';
import {PetService} from "../../shared/services/pet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  pet: Pet;
  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPetById(id)
      .subscribe(petFromRest => {
        this.pet = petFromRest;
      });
  }

}

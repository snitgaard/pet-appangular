import { Component, OnInit } from '@angular/core';
import {PetService} from "../../shared/services/pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {
  id: number;
  petForm = new FormGroup({
    name: new FormControl(''),
    color: new FormControl(''),
    type: new FormControl(''),
    price: new FormControl(''),
    previousOwner: new FormControl(''),
    isComplete: new FormControl('')
  });

  constructor(private petService: PetService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id  = +this.route.snapshot.paramMap.get('id');

    this.petService.getPetById(this.id)
      .subscribe(petFromRest => {
        this.petForm.patchValue({
          name: petFromRest.name,
          color: petFromRest.color,
          type: petFromRest.type,
          price: petFromRest.price,
          previousOwner: petFromRest.previousOwner
        });
      })
  }

  save() {
    const pet = this.petForm.value;
    pet.id = this.id;
    this.petService.updatePet(pet)
      .subscribe(petUpdated => {
        this.router.navigateByUrl('/pets')
      });
  }
}

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
    previousOwner: new FormControl('')
  });

  constructor(private petService: PetService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id  = +this.route.snapshot.paramMap.get('id');
    const pet = this.petService.getPetById(this.id);
    this.petForm.patchValue({
      name: pet.name,
      color: pet.color,
      type: pet.type,
      price: pet.price,
      previousOwner: pet.previousOwner
    });

  }

  save() {
    const pet = this.petForm.value;
    pet.id = this.id;
    this.petService.updatePet(pet);
    /*this.petForm.reset();
    this.router.navigateByUrl('/pets');*/
  }
}

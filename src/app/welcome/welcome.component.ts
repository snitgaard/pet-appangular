import { Component, OnInit } from '@angular/core';
import {Pet} from '../shared/model/Pet';
import {PetService} from '../shared/services/pet.service';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  petItems: Pet[] = [];
  username: string;
  errormessage: string = '';
  title = 'the petshop application!';

  constructor(private petService: PetService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): void {
    this.petService.getItems()
      .subscribe(
        items => {
          this.petItems = items;
        },
        error => {
          this.errormessage = error.message;
        });
  }
}

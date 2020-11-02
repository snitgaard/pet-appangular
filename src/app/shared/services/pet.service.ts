import { Injectable } from '@angular/core';
import {Pet} from '../model/Pet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PetService {

  id = 1;
  pets: Pet[];
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
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
  getPets(): Observable<Pet[]>
  {
    return this.http.get<Pet[]>(environment.apiUrl + 'petshop');
  }

  addPet(pet: Pet)
  {
    pet.id = this.id++;
    this.pets.push(pet);
  }

  updatePet(pet: Pet)
  {
    const petToUpdate = this.pets.find(p => pet.id === p.id);
    const index = this.pets.indexOf(petToUpdate);
    this.pets[index] = pet;
  }
  deletePet(id: number) : Observable<any>
  {
    return this.http.delete(environment.apiUrl + 'petshop/' + id);
  }

  getItems(): Observable<Pet[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Pet[]>(environment.apiUrl + 'petshop', httpOptions);

  }

}

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
  }
  getPetById(id: number): Observable<any>
  {
    return this.http.get<Pet>('https://localhost:44314/api/' + 'petshop/' + 'get/' + id)
  }
  getPets(): Observable<Pet[]>
  {
    return this.http.get<Pet[]>('https://localhost:44314/api/' + 'petshop');
  }

  addPet(pet: Pet): Observable<Pet>
  {
    return this.http.post<Pet>('https://localhost:44314/api/' + 'petshop/', pet);
  }

  updatePet(pet: Pet): Observable<Pet>
  {
    return this.http.put<Pet>('https://localhost:44314/api/' + 'petshop/' + pet.id, pet);
  }
  deletePet(id: number) : Observable<any>
  {
    return this.http.delete('https://localhost:44314/api/' + 'petshop/' + id);
  }

  getItems(): Observable<Pet[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Pet[]>('https://localhost:44314/api/' + 'petshop', httpOptions);

  }

}

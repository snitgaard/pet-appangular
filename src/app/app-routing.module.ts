import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetsListComponent} from './pets/pets-list/pets-list.component';
import {PetDetailsComponent} from './pets/pet-details/pet-details.component';
import {PetAddComponent} from "./pets/pet-add/pet-add.component";
import {PetUpdateComponent} from "./pets/pet-update/pet-update.component";

const routes: Routes = [
  { path: 'pets', component: PetsListComponent},
  { path: '', component: WelcomeComponent},
  { path: 'pets/:id', component: PetDetailsComponent},
  { path: 'pet-add', component: PetAddComponent},
  { path: 'pet-update/:id', component: PetUpdateComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

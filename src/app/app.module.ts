import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    NavbarComponent,
    WelcomeComponent,
    PetDetailsComponent,
    PetAddComponent,
    PetUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

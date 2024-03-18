import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';


import{HttpClientModule}from '@angular/common/http';
import { UserCardComponent } from './components/user-card/user-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateEditUserComponent } from './components/create-edit-user/create-edit-user.component'
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    HomeComponent,
    UserCardComponent,
    CreateEditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
    
  ],
  exports:[
    UserCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

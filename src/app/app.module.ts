import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponet} from "./student/student.componet";
import {classRoomComponet} from "./classRoom/classRoom.component";
import {FormsModule} from "@angular/forms";
import {CurrentweatherComponent} from "./currentweather/currentweather.component";
import {HttpClientModule} from "@angular/common/http";
import {AssignmentComponent} from "./assignment/assignment.component";
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponet} from "./aboutUs/aboutUs.componet";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
//1 routing
const appRoutes: Routes =[
  {path:'',component:AssignmentComponent},
  {path:'about-us', component:AboutUsComponet},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'weather', component: CurrentweatherComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponet,
    classRoomComponet,
    CurrentweatherComponent,
    AssignmentComponent,
    AboutUsComponet,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    //2 routing
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

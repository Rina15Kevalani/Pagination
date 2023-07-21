import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { RouterModule, Routes,Router } from '@angular/router';

const appRoute : Routes=[
  {path : 'home', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

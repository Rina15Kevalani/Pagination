import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './MyComponents/sign-up/sign-up.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : 'home', component: TodosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

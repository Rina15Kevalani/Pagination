import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';

const appRoute : Routes=[
  {path : 'home', component: AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
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

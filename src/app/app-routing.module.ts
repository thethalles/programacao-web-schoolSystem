import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
    {path : 'students', component: StudentsComponent},
    {path : 'courses', component: CoursesComponent},
    {path : ''       , component: HomeComponent}
  ]; //Rota é um nome associado a um componente

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
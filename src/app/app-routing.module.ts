import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';


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
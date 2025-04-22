import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';  // URL Da API
  
  constructor(private http: HttpClient) { } // Injetando o HttpClient no construtor, criando uma dependência

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl); // Método GET para obter todos os cursos
  }

  saveCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course); // Método POST para salvar um curso
  }
}

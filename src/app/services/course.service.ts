import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';  // URL Da API
  
  constructor(private http: HttpClient) { } // Injetando o HttpClient no construtor, criando uma dependência

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl); // Método GET para obter todos os cursos
  }

  save(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course); // Método POST para salvar um curso
  }

  update(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
  }

  delete(course: Course): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${course.id}`);
  }
}

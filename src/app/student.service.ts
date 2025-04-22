import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/students';  // URL Da API

  constructor(private http: HttpClient) { } // Injetando o HttpClient no construtor, criando uma dependência

  getStudents() : Observable <Student[]> {
    return this.http.get<Student[]>(this.apiUrl); // Método GET para obter todos os estudantes
  }

  saveStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student); // Método POST para salvar um estudante
  }
}

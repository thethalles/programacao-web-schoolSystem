import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/students';  // URL Da API

  constructor(private http: HttpClient) { } // Injetando o HttpClient no construtor, criando uma dependência

  getAll() : Observable <Student[]> {
    return this.http.get<Student[]>(this.apiUrl); // Método GET para obter todos os estudantes
  }

  save(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student); // Método POST para salvar um estudante
  }

  delete(student: Student): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${student.id}`); // Método DELETE para remover um estudante
  }

  update(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${student.id}`, student); // Método PUT para atualizar um estudante
  }
}

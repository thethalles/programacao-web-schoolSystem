import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];
  formGroupStudent: FormGroup; //Formulário para criar um novo estudante

  constructor(private studentService: StudentService, 
              private formBuilder: FormBuilder //Injetando o StudentService e formBuilder no construtor, criando uma dependência
  ) {
      this.formGroupStudent = formBuilder.group({
        id: [''],
        name: [''],
        course: ['']
      });
    } 

  ngOnInit(): void { //Captura o evento de inicialização do componente
    this.loadStudents(); //Carrega os estudantes ao inicializar o componente
  }

  loadStudents(){
    this.studentService.getAll().subscribe({
      next: json => this.students = json, //Atribui o resultado da requisição à variável students
    })
  }

  save() {
    this.studentService.save(this.formGroupStudent.value).subscribe({
      next: json => {
        this.students.push(json); //Adiciona o estudante à lista de estudantes
        this.formGroupStudent.reset(); //Limpa o formulário após salvar o estudante
      }
    })
  }

  delete(student: Student) {
    this.studentService.delete(student).subscribe({
      next: () => this.loadStudents()
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-courses',
  standalone: false,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  formGroupCourse: FormGroup;
  isEditing: boolean = false;

  constructor(private courseService: CourseService,
              private formBuilder: FormBuilder //Injetando o CourseService e formBuilder no construtor, criando uma dependência
  )
    {
      this.formGroupCourse = formBuilder.group({
        id: [''],
        name: [''],
        price: [''],
        active: [''],
        promotion: ['']
      });
    }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(){
    this.courseService.getAll().subscribe({
      next: json => this.courses = json
    });   
  }
  
  save(){
    this.courseService.save(this.formGroupCourse.value).subscribe({
      next: json => {
        this.courses.push(json); //Add Curso
        this.formGroupCourse.reset(); //Limpa o Formulário
      }
    })
  }

  delete(course: Course){
    this.courseService.delete(course).subscribe({
      next: () => this.loadCourses()
    });
  }

  onClickUpdate(course: Course) {
    this.courseService.update(course).subscribe({
      next: () => {
        this.isEditing = true;
        this.formGroupCourse.patchValue({
          id: course.id,
          name: course.name,
          price: course.price,
          active: course.active,
          promotion: course.promotion
        });
      }
    });
  }
  
  update() {
    this.courseService.update(this.formGroupCourse.value).subscribe({
      next: () => {
        this.loadCourses() //Carrega os estudantes após atualizar
        this.isEditing = false;
        this.formGroupCourse.reset(); //Limpa o formulário após atualizar o estudante
      } 
    })
  }

  cancel() {
    this.isEditing = false;
    this.formGroupCourse.reset(); //Limpa o formulário ao cancelar a edição
  }

}

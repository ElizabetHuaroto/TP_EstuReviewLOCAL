import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css']
})
export class ProfileTeacherComponent {
  id: number = 0;

  qualification: boolean = false;

  teacher: Teacher;

  constructor(private router: Router, private route: ActivatedRoute, private TeacherService: TeacherService) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
    });

    this.getSchoolById();
  }

  getSchoolById() {
    this.TeacherService.listId(this.id).subscribe(response => {
      this.teacher = response;
    })
  }

  showQualification() {
    this.qualification = !this.qualification;
  }

  sendedReview() {
    // Logica de envio de formulario

    // Desactivar formulario
    this.qualification = false;
  }
}

import { Component } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent {
  userName: string = "Joel";
  lista: Teacher[] = [];

  constructor(private TeacherService: TeacherService) {}

  ngOnInit(): void {
    this.TeacherService.list()
      .subscribe(data => {
        this.lista = data; // asíncrona
      });
  }

}

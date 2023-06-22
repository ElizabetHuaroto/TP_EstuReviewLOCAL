import { Component } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent {

  userName: string =" " ;
  lista: Teacher[] = [];

  constructor(private TeacherService: TeacherService) {}

  ngOnInit(): void {
    const user = localStorage.getItem("UserLogged");
    const userParsed = user ? JSON.parse(user) : null;
    this.userName= userParsed?.nameUser;
    this.TeacherService.list()
      .subscribe(data => {
        this.lista = data; // asíncrona
      });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ColegioService } from 'src/app/services/colegio.service';
import { TeacherService } from 'src/app/services/teacher.service';
@Component({
  selector: 'app-searchschool',
  templateUrl: './searchschool.component.html',
  styleUrls: ['./searchschool.component.css']
})
export class SearchschoolComponent {
  constructor(
    private ColegioService: ColegioService,
    private TeacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute) {}

    @Input() textoBusqueda: string="";
    lista: any = [];
    textSearch: string = '';
    userType = "padre de familia"; // colegial o padre_familia
    valuee: boolean= true;
  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.textSearch = data['text']; //capturando el id del listado

    });

    if (this.userType === 'padre de familia') {
      this.ColegioService.list()
      .subscribe(data => {
        this.lista = data;
        console.log(data);
      });
    } else {
      this.TeacherService.list()
      .subscribe(data => {
        this.lista = data;
        console.log(data);
      });
    }
  }
}

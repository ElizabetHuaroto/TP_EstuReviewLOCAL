import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ColegioService } from 'src/app/services/colegio.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(
    private ColegioService: ColegioService,
    private TeacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute) {}

  lista: any = [];
  textSearch: string = '';
  userType = "universitario"; // colegial o padre_familia

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.textSearch = data['text']; //capturando el id del listado
    });

    if (this.userType === 'padre_familia') {
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

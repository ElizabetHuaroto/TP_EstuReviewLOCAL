import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ColegioService } from 'src/app/services/colegio.service';
@Component({
  selector: 'app-searchschool',
  templateUrl: './searchschool.component.html',
  styleUrls: ['./searchschool.component.css']
})
export class SearchschoolComponent implements OnInit {
  constructor(
    private ColegioService: ColegioService,
    private router: Router,
    private route: ActivatedRoute) {}

  lista: any = [];
  textSearch: string = '';
  userType = "padre de familia"; // colegial o padre_familia

  ngOnInit(): void {
    console.log("aaa");
    this.route.params.subscribe((data: Params) => {
      this.textSearch = data['text']; //capturando el id del listado

    });

    if (this.userType === 'padre_familia') {
      this.ColegioService.list()
      .subscribe(data => {
        this.lista = data;
        console.log(data);
      });
    }
  }
}

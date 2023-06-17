import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Colegio } from 'src/app/models/colegio';
import { Teacher } from 'src/app/models/teacher';
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
    listaColegios: Colegio[] = [];
    showFilterColegios: Colegio[] = [];
    listaProfesores: Teacher[] = [];
    showFilterProfesores: Teacher[] = [];
    textSearch: string = '';
    userType = ""; // colegial o padre_familia
    valuee: boolean= true;
    startFilter: number = 0;
    pensionFilter: number = 0;
    districtFilter: string  = 'Ninguno';
    courseFilter: string = 'Ninguno';
    ngOnInit(): void {

    const user = localStorage.getItem("UserLogged");
    const userParsed = user ? JSON.parse(user) : null;

    this.userType = userParsed.typeUser;

    console.log(this.userType);

    this.route.params.subscribe((data: Params) => {
      this.textSearch = data['text']; //capturando el id del listado
      console.log(this.textSearch);
    });

    if (this.textSearch === 'all') {
      if (this.userType === 'padre de familia') {
        this.ColegioService.list()
        .subscribe(data => {
          this.listaColegios = data;
          this.showFilterColegios = data;
          console.log(data);
        });
      } else {
        this.TeacherService.list()
        .subscribe(data => {
          this.listaProfesores = data;
          this.showFilterProfesores = data;
          console.log(data);
        });
      }
    } else {
      if (this.userType === 'padre de familia') {
        console.log(this.userType);

        this.ColegioService.listSchoolByName(this.textSearch).subscribe(
          (response) => {
            this.listaColegios = response;
            this.showFilterColegios = response;
            console.log(response);
          },
          (error) => console.log(error)
        )
      } else {
        this.TeacherService.listTeacherByName(this.textSearch).subscribe(
          (response) => {
            this.listaProfesores = response;
            this.showFilterProfesores = response;
            console.log(response);
          },
          (error) => console.log(error)
        )
      }
    }
  }

  setStarFilter(star: number) {
    if (this.startFilter <= star) this.startFilter = star;
  }

  setFilterPension(amount: number) {
    if (this.pensionFilter <= amount) this.pensionFilter = amount;
  }

  reset() {
    this.startFilter = 0;
    this.pensionFilter = 0;
    this.districtFilter = 'Ninguno';
    this.courseFilter = 'Ninguno';

    this.showFilterColegios = this.listaColegios;
    this.showFilterProfesores = this.listaProfesores;
  }

  filter() {
    if (this.userType === 'padre de familia') {
      let schoolsWithFilterStar = this.listaColegios.filter(school => {
        if (this.startFilter === 0) return true;
        else if (school.calification == this.startFilter) return true;
        else return false;
      });

      let schoolWithFilterPension = schoolsWithFilterStar.filter(school => {
        if (this.pensionFilter === 0) return true;
        else if (school.pension <= this.pensionFilter) return true;
        else return false;
      })

      let schoolWithFilterDistrict= schoolWithFilterPension.filter(school => {
        if (this.districtFilter === 'Ninguno') return true;
        else if (school.district === this.districtFilter) return true;
        else return false;
      })

      this.showFilterColegios = schoolWithFilterDistrict;
    } else {
      let teachersWithFilterStar = this.listaProfesores.filter(teacher => {
        if (this.startFilter === 0) return true;
        else if (teacher.calification == this.startFilter) return true;
        else return false;
      });

      let teachersWithFilterPension = teachersWithFilterStar.filter(teacher => {
        if (this.pensionFilter === 0) return true;
        else if (teacher.pension == this.pensionFilter) return true;
        else return false;
      })

      let teachersWithFilterCourses= teachersWithFilterPension.filter(teacher => {
        if (this.courseFilter === 'Ninguno') return true;
        else if (teacher.course === this.courseFilter) return true;
        else return false;
      })

      this.showFilterProfesores = teachersWithFilterCourses;
    }


  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Colegio } from 'src/app/models/colegio';
import { ColegioService } from 'src/app/services/colegio.service';

@Component({
  selector: 'app-profile-school',
  templateUrl: './profile-school.component.html',
  styleUrls: ['./profile-school.component.css']
})
export class ProfileSchoolComponent {

  id: number = 0;

  qualification: boolean = false;

  school: Colegio;

  constructor(private router: Router, private route: ActivatedRoute, private ColegioService: ColegioService) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
    });

    this.getSchoolById();
  }

  getSchoolById() {
    this.ColegioService.listId(this.id).subscribe(response => {
      this.school = response;
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

import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Colegio } from 'src/app/models/colegio';
import { ReviewSchool } from 'src/app/models/reviewSchool';
import { ColegioService } from 'src/app/services/colegio.service';
import { ReviewSchoolService } from 'src/app/services/review-school.service';

@Component({
  selector: 'app-profile-school',
  templateUrl: './profile-school.component.html',
  styleUrls: ['./profile-school.component.css']
})
export class ProfileSchoolComponent {

  id: number = 0;

  qualification: boolean = false;

  reviews: ReviewSchool[] = [];

  school: Colegio;

  constructor(private router: Router, private route: ActivatedRoute, private ColegioService: ColegioService, private ReviewSchoolService: ReviewSchoolService) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      console.log("aa");
    });

    this.getSchoolById();
    this.getReviewBySchoolId();
  }

  getSchoolById() {
    this.ColegioService.listId(this.id).subscribe(response => {
      this.school = response;
    })
  }

  getReviewBySchoolId() {
    this.ReviewSchoolService.listSchoolId(this.id).subscribe(
      (response) => this.reviews = response,
      (error) => console.log(error)
    )
  }

  showQualification() {
    this.qualification = !this.qualification;
  }

  sendedReview() {
    // Logica de envio de formulario

    // Desactivar formulario
    this.qualification = false;

    this.getReviewBySchoolId();
  }
}

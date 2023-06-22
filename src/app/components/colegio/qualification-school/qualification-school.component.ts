import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReviewSchool } from 'src/app/models/reviewSchool';
import { ReviewSchoolService } from 'src/app/services/review-school.service';

@Component({
  selector: 'app-qualification-school',
  templateUrl: './qualification-school.component.html',
  styleUrls: ['./qualification-school.component.css']
})
export class QualificationSchoolComponent {

  @Output() sendedReview = new EventEmitter();
  @Input() pension: number = 0;
  @Input() schoolId: number = 0;

  constructor(private ReviewSchoolService: ReviewSchoolService){}

  reviewSave: ReviewSchool = new ReviewSchool();

  cancelReview() {
    this.sendedReview.emit();
  }

  setStarts(starts: number) {
    this.reviewSave.calification = starts;
  }

  resetReviewSchool() {
    this.reviewSave.calification = 1;
    this.reviewSave.reviewS = '';
  }

  sendReview() {

    const user = localStorage.getItem("UserLogged");
    //const userParsed = JSON.parse(user? user : '');

    let userParsed;
    if (user) {
      try {
        userParsed = JSON.parse(user);
      } catch (error) {
        console.error("Error al analizar el JSON del usuario:", error);
      }
    } else {
      console.error("El usuario no está presente en el LocalStorage.");
    }

    this.reviewSave.identidadColegio = this.schoolId;
    this.reviewSave.pension = this.pension;
    if (userParsed && userParsed.id) {
      this.reviewSave.identidadUsuario = userParsed.id;
    } else {
      console.error("El objeto userParsed no tiene una propiedad 'id' válida.");
    }

   // this.reviewSave.userId = userParsed.id;

    this.ReviewSchoolService.insert(this.reviewSave).subscribe(
      reponse => {
        console.log(reponse);
        this.resetReviewSchool();
        this.sendedReview.emit();
      },
      error => console.log(error)
    );

  }

}

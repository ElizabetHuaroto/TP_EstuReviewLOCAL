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
    this.reviewSave.review = '';
  }

  sendReview() {
    const user = localStorage.getItem("UserLogged");
    const userParsed = JSON.parse(user? user : '');

    this.reviewSave.schoolId = this.schoolId;
    this.reviewSave.pension = this.pension;
    this.reviewSave.userId = userParsed.id;

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

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReviewSchool } from 'src/app/models/reviewSchool';
import { ReviewTeacher } from 'src/app/models/reviewTeacher';
import { ReviewTeacherService } from 'src/app/services/review-teacher.service';

@Component({
  selector: 'app-qualification-teacher',
  templateUrl: './qualification-teacher.component.html',
  styleUrls: ['./qualification-teacher.component.css']
})
export class QualificationTeacherComponent {

  @Output() sendedReview = new EventEmitter();
  @Input() pension: number =  0;
  @Input() teacherId: number = 0;

  constructor(private ReviewTeacherService: ReviewTeacherService){}

  reviewSave: ReviewTeacher = new ReviewTeacher();

  cancelReview() {
    this.sendedReview.emit();
  }

  setStarts(starts: number) {
    this.reviewSave.calification = starts;
  }

  resetReviewTeacher() {
    this.reviewSave.calification = 1;
    this.reviewSave.reviewT = '';
  }

  addReviewTeacher() {
    const user = localStorage.getItem("UserLogged");
    const userParsed = JSON.parse(user? user : '');

    this.reviewSave.identidadProfesor = this.teacherId;
    this.reviewSave.payForHour = this.pension;
    this.reviewSave.identidadUsuario = userParsed.id;

    this.ReviewTeacherService.insert(this.reviewSave).subscribe(
      reponse => {
        console.log(reponse);
        this.resetReviewTeacher();
        this.sendedReview.emit();
      },
      error => console.log(error)
    );
  }

}

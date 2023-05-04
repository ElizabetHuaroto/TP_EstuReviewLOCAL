import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-qualification-teacher',
  templateUrl: './qualification-teacher.component.html',
  styleUrls: ['./qualification-teacher.component.css']
})
export class QualificationTeacherComponent {

  @Output() sendedReview = new EventEmitter();

  sendReview() {
    this.sendedReview.emit();
  }

}

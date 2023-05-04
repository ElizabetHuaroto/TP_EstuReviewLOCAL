import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-qualification-school',
  templateUrl: './qualification-school.component.html',
  styleUrls: ['./qualification-school.component.css']
})
export class QualificationSchoolComponent {

  @Output() sendedReview = new EventEmitter();

  sendReview() {
    this.sendedReview.emit();
  }

}

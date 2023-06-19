import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { User } from 'src/app/models/user';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review-teacher',
  templateUrl: './review-teacher.component.html',
  styleUrls: ['./review-teacher.component.css'],
})
export class ReviewTeacherComponent implements OnInit {
  @Input() userId: number = 0; //CAMBIARRR
  @Input() review: string = '';
  @Input() calification: number = 0;
  @Input() dateReviewT: Date = new Date(Date.now());

  user: User;
  starsArray: Boolean[] = [false, false, false, false, false];

  constructor(private User: UserService) {}
  ngOnInit(): void {
    this.User.getById(this.userId).subscribe(
      (response) => (this.user = response)
    );
    for (let i = 0; i < this.calification; i++) {
      this.starsArray[i] = true;
    }
  }
}

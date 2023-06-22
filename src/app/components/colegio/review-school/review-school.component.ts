import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review-school',
  templateUrl: './review-school.component.html',
  styleUrls: ['./review-school.component.css']
})
export class ReviewSchoolComponent {
  @Input()userId:number= 0; //CAMBIARRR
  @Input()review:string="";
  @Input()calification:number=0;
  @Input()dateReviewS:Date=new Date(Date.now());

  user: User;
  starsArray: Boolean[] = [false, false, false, false, false]

  constructor(private User: UserService) {}
  ngOnInit(): void {
    this.User.getById(this.userId).subscribe(response=> this.user= response);
    for(let i = 0; i < this.calification; i++) {
      this.starsArray[i] = true;
    }
  }
}


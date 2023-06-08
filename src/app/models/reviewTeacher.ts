import { Teacher } from "./teacher";
import { User } from "./user";
export class ReviewTeacher
{
  id:number=0;
  dateReviewT: Date=new Date(Date.now())
  reviewT: string = "";
  teacher: Teacher = new Teacher();
  payForHour: number =0;
  calification: number = 0;
  user:User = new User();
}

import { Teacher } from "./teacher";
import { User } from "./user";
export class ReviewTeacher
{
  id:number=0;
  dateReviewT: Date=new Date(Date.now())
  review: string = "";
  teacherId: number=0;
  payForHour: number =0;
  calification: number = 0;
  userId: number=0;
}

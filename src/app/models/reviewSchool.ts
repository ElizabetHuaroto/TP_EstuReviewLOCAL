import { Colegio } from "./colegio";
import { User } from "./user";
export class ReviewSchool
{
  id:number=0;
  dateReviewS: Date=new Date(Date.now())
  review: string = "";
  calification: number = 1;
  schoolId: number=0;
  userId:number=0;
  pension: number =0;
}

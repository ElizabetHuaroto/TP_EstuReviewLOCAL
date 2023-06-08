import { Colegio } from "./colegio";
import { User } from "./user";
export class ReviewSchool
{
  id:number=0;
  dateReviewS: Date=new Date(Date.now())
  reviewS: string = "";
  calification: number = 0;
  colegio: Colegio = new Colegio();
  user:User = new User();
  pension: number =0;
}

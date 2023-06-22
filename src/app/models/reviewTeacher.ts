import { Teacher } from "./teacher";
import { User } from "./user";
export class ReviewTeacher
{
  id:number=0;
  dateReviewT: Date=new Date(Date.now())
  reviewT: string = "";
  identidadProfesor: number=0;
  payForHour: number =0;
  calification: number = 1;
  identidadUsuario: number=0;
}

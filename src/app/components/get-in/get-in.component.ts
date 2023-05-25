import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-get-in',
  templateUrl: './get-in.component.html',
  styleUrls: ['./get-in.component.css']
})
export class GetInComponent {

  email: string;
  password: string;
  constructor(private userService: UserService, private loginService: LoginService) {}
login() {

  // Una vez que se ha iniciado sesión exitosamente, se actualiza la variable "isLogged" del NavbarComponent
 // this.userService.isEnterSubject.next(true);
console.log(this.email,this.password);
this.loginService.inicio({email:"ana@gmail.com", password:"123"}).subscribe(response => console.log(response));
}
}

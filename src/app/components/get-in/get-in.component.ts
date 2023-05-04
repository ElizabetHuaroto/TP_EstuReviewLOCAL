import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NavigationComponent } from '../navigation/navigation.component';
@Component({
  selector: 'app-get-in',
  templateUrl: './get-in.component.html',
  styleUrls: ['./get-in.component.css']
})
export class GetInComponent {
  constructor(private userService: UserService) {}
login() {

  // Una vez que se ha iniciado sesión exitosamente, se actualiza la variable "isLogged" del NavbarComponent
  this.userService.isEnterSubject.next(true);
}
}

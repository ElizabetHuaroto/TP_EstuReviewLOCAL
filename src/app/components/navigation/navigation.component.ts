import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  isEnter: boolean;
  constructor(private userService: UserService) {
    //CAMBIO NAV
    // Subscribirse a los cambios en la variable "isLogged" en el UserService
    this.userService.isEnter$.subscribe(isEnter => {
      this.isEnter = isEnter;
    });
  }
}

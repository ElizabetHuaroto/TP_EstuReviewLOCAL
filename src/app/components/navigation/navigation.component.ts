import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isEnter: boolean;
  univ:boolean;

  constructor(private userService: UserService, private router: Router) {
    //CAMBIO NAV
    // Subscribirse a los cambios en la variable "isLogged" en el UserService
    // this.userService.isEnter$.subscribe(isEnter => {
    //   this.isEnter = isEnter;
    // });

    // //
    // this.userService.univ$.subscribe(univ => {
    //   this.univ = univ;
    // });
  }
  ngOnInit(): void {
    const user = localStorage.getItem("UserLogged");
    const userParsed = user === null? null : JSON.parse(user);

    if (userParsed !== null) {
      this.isEnter = true;
    }
  }

  async logout() {
    localStorage.removeItem("UserLogged");
    await this.router.navigate(['/ingreso']);
    location.reload();
  }
}

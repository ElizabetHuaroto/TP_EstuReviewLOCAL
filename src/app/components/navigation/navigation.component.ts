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
  userParsed: any; // Variable para almacenar el usuario parseado del localStorage

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem("UserLogged");
    this.userParsed = user ? JSON.parse(user) : null; // Actualización: Asignar el valor de userParsed

    if (this.userParsed !== null) {
      this.isEnter = true;

      if (this.userParsed.typeUser === 'universitario') {
        this.router.navigate(['/teachers']);
      } else {
        this.router.navigate(['/colegios']);
      }
    }
  }


  search() {
    const user = localStorage.getItem("UserLogged");
    this.userParsed = user ? JSON.parse(user) : null;

    if (this.userParsed !== null) {
      if (this.userParsed.typeUser === 'universitario') {
        this.router.navigate(['/search']);
      } else if (this.userParsed.typeUser === 'padre de familia') {
        this.router.navigate(['/searchSchool']);
      } else {
        console.log("Tipo de usuario no reconocido:", this.userParsed.typeUser);
      }
    }
  }



  async logout() {
    localStorage.removeItem("UserLogged");
    await this.router.navigate(['/ingreso']);
    location.reload();
  }
}

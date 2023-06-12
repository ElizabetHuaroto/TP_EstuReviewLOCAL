import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  //textoBusqueda: string;
 // @Output() buscar: EventEmitter<string> = new EventEmitter<string>();
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem("UserLogged");
    this.userParsed = user ? JSON.parse(user) : null; // Actualización: Asignar el valor de userParsed

    if (this.userParsed !== null) {
      this.isEnter = true;

    }
  }


  search() { //tiene que buscar con respecto a ambos tipos
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

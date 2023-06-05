import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { SecurityService } from 'src/app/services/security.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-in',
  templateUrl: './get-in.component.html',
  styleUrls: ['./get-in.component.css']
})
export class GetInComponent implements OnInit {

  email: string;
  password: string;
  constructor(private userService: UserService, private SecurityService: SecurityService, private router: Router) {}
  ngOnInit(): void {
    const user = localStorage.getItem("UserLogged");
    const userParsed = user === null? null : JSON.parse(user);

    if (userParsed !== null) {
      if (userParsed.typeUser === 'universitario') {
        this.router.navigate(['/teachers']);
      }
      else {
        this.router.navigate(['/colegios']);
      }
    }
  }
  login() {
    // Una vez que se ha iniciado sesión exitosamente, se actualiza la variable "isLogged" del NavbarComponent
    // this.userService.isEnterSubject.next(true);
    this.SecurityService.login({email:this.email, password: this.password})
      .subscribe((response: any) => {
        if (response.user.typeUser === 'universitario') {
          this.router.navigate(['/teachers']);
        }
        else {
          this.router.navigate(['/colegios']);
        }
        localStorage.setItem('UserLogged', JSON.stringify(response));
        location.reload();
      }, error => {
        console.log("el usuario no existe!!");
      });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: User;
  id: number = 0;

  constructor(private router: Router, private route: ActivatedRoute,private UserService: UserService) {}

  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
    });

    this.UserService.getById(this.id).subscribe(response => {
      this.user = response;
    })
  }

}

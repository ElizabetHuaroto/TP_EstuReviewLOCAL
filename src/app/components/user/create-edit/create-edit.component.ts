import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent {
form: FormGroup = new FormGroup({});
user:User = new User();
mensaje: string ="";
constructor(private userService: UserService, private router: Router){}
ngOnInit(): void{
  this.form = new FormGroup({
    id: new FormControl(),
  nameUser: new FormControl(),
  typeUser:new FormControl(),
  emailUser: new FormControl(),
  passwordUser: new FormControl(),
  districUser: new FormControl(),
  ageUser:new FormControl()

  }
  );
}
aceptar():void{
  this.user.id = this.form.value ['id'];
  this.user.nameUser = this.form.value ['nameUser'];
  this.user.typeUser = this.form.value ['typeUser'];
  this.user.emailUser = this.form.value ['emailUser'];
  this.user.districUser = this.form.value ['districUser'];
  this.user.ageUser = this.form.value ['ageUser'];
  this.user.passwordUser = this.form.value ['passwordUser'];
  if(this.form.value['nameUser'].length>0 &&
  this.form.value['typeUser'].length>0 &&
  this.form.value['districUser'].length>0)

  { //se va a teachers para que no muestre la lista, sino que se pudo  registrar con exito
    this.userService.insert(this.user).subscribe(data => this.router.navigate(['teachers']).then(()=>{
      window.location.reload();
    }));
  }
  else {
    this.mensaje=="Agregue los campos omitidos.";
  }
}
}

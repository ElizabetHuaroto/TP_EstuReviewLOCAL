import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-listar',
  templateUrl: './user-listar.component.html',
  styleUrls: ['./user-listar.component.css']
})
export class UserListarComponent implements OnInit{

  lista: User[]=[];
  displayedColumns =['id','nameUser','typeUser','emailUser','passwordUser','districUser','ageUser'];

  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService){
    console.log("CONSTRUCTOR LISTAR")
  }
  ngOnInit(): void {
    console.log("NGONINIT DE LISTAR")
    this.userService.list().subscribe(data => this.dataSource.data = data);
   }
}

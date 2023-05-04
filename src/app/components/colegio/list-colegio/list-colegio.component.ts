import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Colegio } from 'src/app/models/colegio';
import { ColegioService } from 'src/app/services/colegio.service';

@Component({
  selector: 'app-list-colegio',
  templateUrl: './list-colegio.component.html',
  styleUrls: ['./list-colegio.component.css']
})
export class ListColegioComponent {
  lista: Colegio[] = [];
  userName: string = "Carlos";
  /* displayedColumns = ['id','name','district','pension'];
  dataSource = new MatTableDataSource<Colegio>();
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort) sort : MatSort; */

  constructor(private colegioService: ColegioService){
  }
  ngOnInit(): void {
    this.colegioService.list().subscribe(data => {


      this.lista = data; // asíncrona

      });
  }


  /* ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

  deleteList(id: number) {
    this.colegioService.deleteList(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Colegio) => {
        return e.id !== id ? e : false;
      });
    });
  } */
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Colegio } from 'src/app/models/colegio';
import { ColegioService } from 'src/app/services/colegio.service';

@Component({
  selector: 'app-registro-colegio',
  templateUrl: './registro-colegio.component.html',
  styleUrls: ['./registro-colegio.component.css']
})
export class RegistroColegioComponent {
  form: FormGroup = new FormGroup({});
  colegio: Colegio = new Colegio();
  mensaje: string = '';
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false; //no es edicion

  constructor(
    private colegioService: ColegioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //para obtener el routerLink de listado
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      district: new FormControl(),
      pension: new FormControl(),

    });
  }
  init() {
    if (this.edicion) {
      this.colegioService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name),
          district: new FormControl(data.district),
          pension: new FormControl(data.pension),
        });
      });
    }
  }

  aceptar(): void {
    this.colegio.id = this.form.value['id'];
    this.colegio.name = this.form.value['name'];
    this.colegio.district = this.form.value['district'];
    this.colegio.pension = this.form.value['pension'];
    if (
      this.form.value['name'].length > 0 &&
      this.form.value['district'].length > 0
    ) {
      if (this.edicion) {
        //registrarlo en la base de  datos
        this.colegioService.update(this.colegio).subscribe((data) =>
          this.router.navigate(['colegios']).then(() => {
            window.location.reload();
          })
        );
      } else {
        //registrarlo en la base de  datos
        this.colegioService.insert(this.colegio).subscribe((data) =>
          this.router.navigate(['colegios']).then(() => {
            window.location.reload();
          })
        );
      }
    } else {
      this.mensaje = 'Ingrese su email o name';
    }
  }
}

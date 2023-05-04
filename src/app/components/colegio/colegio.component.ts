import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-colegio',
  templateUrl: './colegio.component.html',
  styleUrls: ['./colegio.component.css']
})
export class ColegioComponent implements OnInit{
  constructor(public route:ActivatedRoute){
  }

  ngOnInit(): void {

  }


}

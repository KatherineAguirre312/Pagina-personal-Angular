import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pprofile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nombre = 'Katherine Andrea Castaño Aguirre';
  email = 'katherinecastaguirre@gmail.com';
  fechaNacimiento = '12/03/1993';
  biografia = 'Aquí se puede poner cualquier descripción biográfica.';

  constructor() { }

  ngOnInit(): void {
  }

}

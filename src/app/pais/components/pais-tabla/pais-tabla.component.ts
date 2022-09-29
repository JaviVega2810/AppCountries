import { Component, Input } from '@angular/core';
import { RESTCountry } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent{

  @Input() paises: RESTCountry[] = [];

  constructor() { }


}

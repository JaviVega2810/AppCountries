import { Component } from '@angular/core';
import { RESTCountry } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

 constructor(private paisService: PaisService){}

 termino: string = '';
 error: boolean = false;
 paises: RESTCountry[] = [];

  buscar(){

        this.error = false;
        this.paisService.buscarPais(this.termino).subscribe(
          (resp) =>{
          this.paises = resp;
        }, (error) => {
          this.error = true;
          this.paises = [];
        });
      }
  }

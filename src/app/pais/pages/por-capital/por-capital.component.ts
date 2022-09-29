import { Component } from '@angular/core';
import { RESTCountry } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent{

 constructor(private paisService: PaisService){}

 termino: string = '';
 error: boolean = false;
 paises: RESTCountry[] = [];
 placeholder: string = 'Por capital';

      buscar(termino: string){

            this.error = false;
            this.termino = termino;
            this.paisService.buscarCapital(this.termino).subscribe(
              (resp) =>{
              this.paises = resp;
            }, (error) => {
              this.error = true;
              this.paises = [];
            });
          }

}

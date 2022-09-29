import { Component } from '@angular/core';
import { RESTCountry } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  constructor(private paisService: PaisService) { }

  regiones: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: RESTCountry[] = [];

  activarRegion(region: string){

    if(this.regionActiva === region){ return; }

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarPorRegion(region)
        .subscribe(paises => {
          this.paises = paises;
        }, error => {
          console.info(error);
          this.paises = [];
        });
  }

  getClassCSS(region: string) : string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}

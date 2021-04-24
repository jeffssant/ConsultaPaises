import { Component, OnInit } from '@angular/core';
import { Region, Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})

export class PorRegionComponent implements OnInit {

  region:string = '';
  hayError: boolean = false;
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClassesCss(region:string) {
    return (region === this.regionActiva) ? 'm-1 btn  btn-primary' : 'm-1 btn btn-outline-primary';
  }

  activaRegion(region: string){
    if (region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(region).subscribe(

      (paises) => { 
        console.log(paises);
        this.paises = paises;
      }, 

      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    )
  }
  ngOnInit(): void {
  }

}

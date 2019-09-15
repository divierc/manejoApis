import { Component, OnInit } from '@angular/core';
import { CountryService } from '../api/country.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  paises: any[] = [];
  errorMessage = '';
  filtro: any[] = [];
  filteredProducts: any[] = [];


  constructor(private countryService: CountryService) {
    console.log('tab2.page');
  }

  ngOnInit() {
    this.countryService.obtenerPaises().subscribe(
      paises => {
        this.paises = paises;
      }, error => this.errorMessage = error
    );
    console.log(this.paises);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado:string="";
  numero1:string="";
  numero2:string="";
    constructor() {}
      suma(){
        this.resultado=(parseInt(this.numero1)+parseInt(this.numero2)).toString();
      }
}



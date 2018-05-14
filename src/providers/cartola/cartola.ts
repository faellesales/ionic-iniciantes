import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/platform/platform';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartolaProvider {

  basepath = "/cartolaapi"

  constructor(
    public http: Http,
    private plataform: Platform
  ) {
    if(this.plataform.is("codorva")){
      this.basepath = "https://api.cartolafc.globo.com";

    }
    
  }

  atletas(){
    return this.http.get(`${this.basepath}/mercado/destaques`);
    //return this.http.get("https://api.cartolafc.globo.com/atletas/mercado");
    
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

/**
 * Generated class for the AtletasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atletas',
  templateUrl: 'atletas.html',
  providers: [
    CartolaProvider
  ]
})
export class AtletasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _cartolaProvider: CartolaProvider
  ){
  }

  public lista_jogadores = new Array<any>();

  ionViewDidLoad() {
    this._cartolaProvider.atletas().subscribe(
      data=>{

        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        this.lista_jogadores = objeto_retorno;
        console.log(objeto_retorno);

      }, error => {
        console.log(error);
      }
      )
  }

}

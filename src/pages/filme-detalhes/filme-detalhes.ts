import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MoovieProvider]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeId;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public moovieProvider: MoovieProvider) {
  }

  ionViewDidLoad() {
    this.filmeId = this.navParams.get("id");
    this.moovieProvider.getMovieDetails(this.filmeId).subscribe(data=>{
      let retorno = (data as any)._body;
      this.filme = JSON.parse(retorno);

    }, error =>{
      console.log(error);
    });
    
    console.log("FilmeId", this.filmeId );
  }

}

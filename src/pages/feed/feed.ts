import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})

export class FeedPage {
  public objeto_feed = {
    titulo: "Rafa Sales",
    data: "Abril 26, 2018",
    descricao : "Estou criando um app incrivel..",
    qntd_like: 12,
    qntd_comments: 4,
    time_comment: "11h ago"

  }
  
  public lista_filmes = new Array<any>();

  public nomeUsuario:string = "Rafa Sales";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider : MoovieProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number) :void{
    alert(num1+num2);  
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10,9);
    this.movieProvider.getLatesMovies().subscribe(
      data=>{
        
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;

        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
    
  }

}

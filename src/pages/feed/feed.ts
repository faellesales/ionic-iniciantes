import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  public loader;
  public refresher;
  public isRefreshing: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider : MoovieProvider,
    public loadingCtrl: LoadingController
    ) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  fechaCarregando(){
    this.loader.dismiss();
  }

  public somaDoisNumeros(num1:number, num2:number) :void{
    alert(num1+num2);  
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme){
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage,{id: filme.id});
  }

  carregarFilmes(){
   this.abreCarregando();
    this.movieProvider.getLatesMovies().subscribe(
      data=>{
        
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;

        console.log(objeto_retorno);
        this.fechaCarregando();

        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )

  }

}

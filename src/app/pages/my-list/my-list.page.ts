import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from 'src/app/models/anime';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPage implements OnInit {
  anime: Anime;
  meus_animes: Anime[];
  searchItems: string = "";

  constructor(
    private animeService: AnimesService,
    private router: Router,
  ) {
    const nav = this.router.getCurrentNavigation();
    //this.anime = nav.extras.state.objeto;
    this.meus_animes = this.animeService.animes;  
  }

  ngOnInit() {
  }

  searchMyAnime( event ){
    this.searchItems = event.detail.value;
  }

  irParaBuscar(){
    this.router.navigate(['busca']);
  }

  private excluirAnime(){
    this.animeService.excluirAnime(this.anime)
  }

}

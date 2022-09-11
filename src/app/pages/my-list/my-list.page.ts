import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from 'src/app/models/anime';
import { AnimesService } from 'src/app/services/animes.service';


//suggestion e favorites vira apenas tags

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPage implements OnInit {
  meus_animes: Anime[];
  searchItems: string = "";

  constructor(
    private animeService: AnimesService,
    private router: Router,
  ) {
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
  
  irParaEdicao(anime: Anime){
    this.router.navigateByUrl("/editar",
      { state: {object: anime} }
    )
  }

}

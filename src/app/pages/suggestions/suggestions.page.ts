import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/models/anime';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.page.html',
  styleUrls: ['./suggestions.page.scss'],
})
export class SuggestionsPage implements OnInit {
  recomendations: Anime[];

  constructor(
    private animeService: AnimesService,
  ) { 
    this.recomendations = this.animeService.suggestionAnimes;
  }

  ngOnInit() {
  }

  

}

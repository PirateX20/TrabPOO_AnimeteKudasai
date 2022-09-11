import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  private _animeList: Anime[] = [];

  constructor() {
    let animet1 = new Anime("Darling In the FRAXX", "SciFI", "../assets/images/IonicImage1.jpg");
    let animet2 = new Anime("Teste2", "Generico", null);
    this.adicionar(animet1);
    this.adicionar(animet2);
   }

  public get animes(): Anime[]{
    return this._animeList;
  }
  public adicionar(anime: Anime){
    this._animeList.push(anime);
  }
}

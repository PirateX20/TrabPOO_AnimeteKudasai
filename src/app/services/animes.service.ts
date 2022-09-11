import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  private _animeList: Anime[] = [];
  private _genderList: string[] = [];
  private _suggestionList: Anime[] = [];

  constructor() {
    let gList1 = [" Sci-Fi", " Aliens", " Robos"];
    let gList2 = ["Adicione novas tags"];
    let animet1 = new Anime("Darling In the FRAXX", gList1 , "../assets/images/IonicImage1.jpg");
    let animet2 = new Anime("Teste2", gList2, "../assets/images/akame_IonicTest.jpg");
    this.adicionar(animet1);
    this.adicionar(animet2);
    this.newSuggestion(animet1);
   }

  public get genderList(): string[]{
    return this._genderList;
  }

  public get animes(): Anime[]{
    return this._animeList;
  }
  public get suggestionAnimes(): Anime[]{
    return this._suggestionList;
  }

  public adicionar(anime: Anime){
    this._animeList.push(anime);
  }
  public newSuggestion(suggestionAnime: Anime){
    this._suggestionList.push(suggestionAnime)
  }
  public excluirAnime(anime: Anime): boolean{
    for(let i=0; i<this._animeList.length; i++){
      if(this._animeList[i].id == anime.id){
        this._animeList.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

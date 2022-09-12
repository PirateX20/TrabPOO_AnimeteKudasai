import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  private _animeList: Anime[] = [];
  private _genderList: string[] = [];

  constructor() {
    let gList1 = [" Sci-Fi", " Aliens", " Robos", "Suggestion"];
    let gList2 = ["Ação", "Assassinato", "Romance", "Yandere"];
    let animet1 = new Anime("Darling In the FRAXX", gList1,
       "../assets/images/IonicImage1.jpg", 10, "00/00/0000", 24, 24);
    let animet2 = new Anime("Akame Ga Kill", gList2,
      "../assets/images/akame_IonicTest.jpg", 9, "08/08/2008", 12, 8);
    this.adicionarAnime(animet1);
    this.adicionarAnime(animet2);
   }

  public get genderList(): string[]{
    return this._genderList;
  }
  public get animes(): Anime[]{
    return this._animeList;
  }

  public adicionarAnime(anime: Anime){
    this._animeList.push(anime);
  }

  public editarAnime(anime: Anime, titulo: string, generos: string[],
    imageLink: string, totalEp: number, assistidosEp: number): boolean{
    for(let i=0; i<this._animeList.length; i++){
        if(this._animeList[i].id == anime.id){
          this._animeList[i].titulo = titulo;
          this._animeList[i].generos = generos;
          this._animeList[i].imageLink = imageLink;
          this._animeList[i].totalEp = totalEp;
          this._animeList[i].assistidosEp = assistidosEp;
          return true;
      }
    }
    return false;
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

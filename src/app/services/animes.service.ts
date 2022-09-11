import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  private _animeList: Anime[] = [];
  private _genderList: string[] = [];

  constructor() {
    let gList1 = [" Sci-Fi", " Aliens", " Robos"];
    let gList2 = ["Adicione novas tags"];
    let animet1 = new Anime("Darling In the FRAXX", gList1 , "../assets/images/IonicImage1.jpg");
    let animet2 = new Anime("Teste2", gList2, null);
    this.adicionar(animet1);
    this.adicionar(animet2);
   }

  public get animes(): Anime[]{
    return this._animeList;
  }

  public get genderList(): string[]{
    return this._genderList;
  }

  public adicionar(anime: Anime){
    this._animeList.push(anime);
  }
}

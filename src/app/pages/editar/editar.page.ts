import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Anime } from 'src/app/models/anime';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  animeEdit: Anime;
  tituloEdit: string;
  imageLinkEdit: string;
  generosEdit: string[] = [];
  notaEdit: number;
  dataEdit: string;
  totalEpEdit: number;
  assistidosEpEdit: number;
  
  constructor(
    private router: Router,
    private animeService: AnimesService,
  ) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.animeEdit = nav.extras.state.object;
    this.tituloEdit = this.animeEdit.titulo;
    this.generosEdit = this.animeEdit.generos;
    this.imageLinkEdit = this.animeEdit.imageLink;
    this.totalEpEdit = this.animeEdit.totalEp;
    this.assistidosEpEdit = this.animeEdit.assistidosEp;
  }

  public animeEdition(){
    if(
      this.validar(this.tituloEdit) &&
      this.validar(this.generosEdit) &&
      this.validar(this.imageLinkEdit) &&
      this.validar(this.totalEpEdit) &&
      this.validar(this.assistidosEpEdit)
    ){
      if(this.animeService.editarAnime(this.animeEdit, this.tituloEdit,
        this.generosEdit, this.imageLinkEdit, this.totalEpEdit, this.assistidosEpEdit)){
        this.router.navigate(["/my-list"]);

      }
    }
  }

  private validar(campo: any): Boolean {
    if (!campo) {
      return false;
    }
    return true;
  }

  public excluirAnime(){
    this.animeService.excluirAnime(this.animeEdit)
    this.router.navigate(["/my-list"])
  }
}

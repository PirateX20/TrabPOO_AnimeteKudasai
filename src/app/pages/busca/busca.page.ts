import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {
  novo_anime: FormGroup;
  submited: Boolean = false;

  constructor(
    private animesService: AnimesService,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.novo_anime = this.formBuilder.group({
      nome: ["", [Validators.required]],
      genero: [""],
    });
  }

  submitForm() : Boolean{
    this.submited = true;
    this.presentAlert("AnimeteK", "Adicionar", "Cadastrado!");
    return false;
  }

  public adicionar(){
    this.animesService.adicionar(this.novo_anime.value);
    this.presentAlert("AnimeteK", "Adicionar", "O anime foi adicionado a sua lista!")
    console.log("implementar");
  }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}

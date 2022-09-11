import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.page.html',
  styleUrls: ['./busca.page.scss'],
})
export class BuscaPage implements OnInit {
  formAdicionar: FormGroup;
  submited: Boolean = false;
  genderList: string[] = ["Ação", "H-Word ( ͡° ͜ʖ ͡°)", "Robôs", "Romance", "Sci-Fi"];
  notas: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private animesService: AnimesService,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.formAdicionar = this.formBuilder.group({
      titulo: ["", [Validators.required]],
      generos: ["", [Validators.required]],
      nota: [""],
      data: [""],
      nte: [""],
    });
  }

  submitForm() : Boolean{
    this.submited = true;
    if(!this.formAdicionar.valid){
      this.presentAlert("AnimeteK", "Adicionar Error", "Campos inválidos");
      return false;
    }else{
      this.presentAlert("AnimeteK", "Adicionar", "O anime foi adicionado a sua lista!");
    }
  }

  get errorControl(){
    return this.formAdicionar.controls;
  }

  private validar(campo: any) : boolean{
    if(!campo){
      return false;
    }else{
      return true;
    }
  }
  public cancel(){
    this.router.navigate(["/my-list"])
  }
  public adicionar(){
    this.animesService.adicionar(this.formAdicionar.value);
    this.formAdicionar = this.formBuilder.group({
      titulo:[""],
      generos:[""],
      nota:[""],
      data:[""],
      nte:[""],
    })
    this.presentAlert("AnimeteK", "Adicionar", "O anime foi adicionado a sua lista!");
    this.router.navigate(["/my-list"]);
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Minha Lista', url: './folder/my-list', icon: 'list' },
    { title: 'Buscar', url: '/folder/busca', icon: 'search' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Recomendações', url: '/folder/Recomendados', icon: 'archive' },
  ];
  public labels = ["Adicione as tags que deseja criar"];
  //adicionar tags, inicia vazia
  //tags: Tags[]
  constructor(
    private alertController: AlertController,
    private router: Router,
  ) {}

  private adicionar(){
    this.presentAlert("Redirecting...", "Aguarde", "Você está sendo encaminhado a uma nova página");
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

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
    { title: 'Home', url: '/home', icon: 'home'},
    { title: 'Minha Lista', url: '/my-list', icon: 'list' },
    { title: 'Favoritos', url: '/favorites', icon: 'heart' },
    { title: 'Recomendações', url: '/suggestions', icon: 'archive' },
    { title: 'Buscar', url: '/busca', icon: 'search' },
  ];
  public labels = ["Adicione as tags que deseja criar"];
  //adicionar tags, inicia vazia
  //tags: Tags[]

  constructor(
    private alertController: AlertController,
    private router: Router,
  ) {}

  redirect(url: string){
    this.presentAlert("Redirecting...", "Aguarde", "Você está sendo encaminhado a uma nova página");
    this.router.navigate([url]);
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

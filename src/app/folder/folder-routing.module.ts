import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { NovoAnimeComponent } from './novo-anime/novo-anime.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'novoAnime',
    component: NovoAnimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}

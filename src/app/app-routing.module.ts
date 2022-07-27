import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { PacksComponent } from './packs/packs.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
  {path: 'apropos', component: AProposComponent},
  {path: 'packs', component: PacksComponent},
  {path: 'produits', component: ProduitsComponent},
  {path: '', component: HomeComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

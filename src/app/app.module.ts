import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AProposComponent } from './apropos/apropos.component';
import { ProduitsComponent } from './produits/produits.component';
import { PacksComponent } from './packs/packs.component';
import { ForumComponent } from './forum/forum.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AProposComponent,
    ProduitsComponent,
    PacksComponent,
    ForumComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

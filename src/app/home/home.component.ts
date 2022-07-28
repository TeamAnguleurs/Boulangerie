import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  detoxslim = [
    {
      id: 1,
      name: 'Démarrer une cure détox',
      description: 'Minceur & Digestion',
      image: '../../assets/img/accueil/detox-slim-fit.jpg',

    },
    { 
      id: 2,
      name: 'Sélection remise en forme',
      description: "Arriver en forme pour l'été",
      image: '../../assets/img/accueil/instagram-feed4_360x.jpg',

    },
    {
      id: 3,
      name: 'Tisanes pour les enfants',
      description: 'Infusions à déguster en famille',
      image: '../../assets/img/accueil/infusions_animaux_540x.jpg',

    },
 
  ];
}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.css'],
})
export class PacksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  decouverte = [
    {
      id: 1,
      name: 'Coffret Découverte 20 sachets',
      description: 'NOUVEAU : Le coffret découverte 10 mélanges',
      image: '../../assets/img/packs/CoffretDécouverte20Sachets.jpg',
      prix: '19,99€',
    },
    {
      id: 2,
      name: 'Coffret Découverte Infusion 20 sachets',
      description: 'NOUVEAU : Le coffret Infusions 20 sachets',
      image: '../../assets/img/packs/CoffretDécouverteInfusion20Sachets.jpg',
      prix: '19,99€',
    },
    {
      id: 3,
      name: 'Detox Slim Fit',
      description: 'Minceur & Anti-ballonnement',
      image: '../../assets/img/packs/detoxcure_300x.jpg',
      prix: '29,90€',
    },
    {
      id: 4,
      name: 'Thé Matcha cérémonie bio',
      description: 'Originaire du Japon',
      image: '../../assets/img/packs/ThéMatcha.jpg',
      prix: '29,99€',
    },
    {
      id: 5,
      name: 'Coffret Famille 9 Mélanges',
      description: '45 sachets en un seul coffret',
      image: '../../assets/img/packs/CoffretFamille.png',
      prix: '39,99€',
    },
    {
      id: 6,
      name: 'Coffret Infusion 8 mélanges 45 sachets',
      description: 'Le coffret infusion 45 sachets',
      image: '../../assets/img/packs/CoffretInfusion8Mélanges45Sachets.jpg',
      prix: '39,99€',
    },
    {
      id: 7,
      name: 'Coffret Énergie & Slim Fit',
      description: 'Énergie & vitalité',
      image: '../../assets/img/packs/Coffret-morningboost_300x.jpg',
      prix: '44,90€',
    },
    {
      id: 8,
      name: 'Coffret digestion',
      description: 'Pour les gourmets',
      image: '../../assets/img/packs/Coffret-night_300x.jpg',
      prix: '44,90€',
    },
    {
      id: 9,
      name: 'Bundle Detox Slim Fit',
      description: 'Livraison gratuite avec un accessoire',
      image: '../../assets/img/packs/BundleDetoxSlimFit_300x.jpg',
      prix: '59,90€',
    },
    {
      id: 10,
      name: 'Pack Detox 28 jours',
      description: 'Boostez vous métabolisme et drainez votre organisme',
      image: '../../assets/img/packs/PackDetox28Jours.png',
      prix: '69,99€',
    },
    {
      id: 11,
      name: 'Coffret 3 mélanges pour les sportifs',
      description: 'Pour les grand(e)s sprtifs(ves)',
      image: '../../assets/img/packs/Coffret-sportif-grand_300x.jpg',
      prix: '74,90€',
    },
    {
      id: 12,
      name: 'Coffret 7 infusions sans théine (196 sachets)',
      description: 'Coffret 7 infusions sans théine (196 sachets)',
      image: '../../assets/img/packs/Coffret-infusion-grand_jpg_300x.jpg',
      prix: '99,99€',
    },
  ];
}

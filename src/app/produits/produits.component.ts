import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  morning = [
    { id: 1, name: "Morning Boost Detox", description: "Substances nutritives & stimulants naturels", image: "../../assets/img/produits/MorningBoost_withlightercomposition_300x.jpg", prix: "14,99€" },
    { id: 2, name: "Night Cleanse Detox", description: "Infusion digestion facile", image: "../../assets/img/produits/NightCleanse_withlightercomposition_300x.jpg", prix: "14,99€" },
    { id: 3, name: "Sleep Well Infusion", description: "Dormez mieux et rêvez plus", image: "../../assets/img/produits/Sleepwell_withlightercomposition_1_300x.jpg", prix: "14,99€" },
    { id: 4, name: "Fresh Skin", description: "Le plein d'anti-oxydants pour votre peau", image: "../../assets/img/produits/FreshSkin_withlightercomposition_300x.jpg", prix: "14,99€" },
    { id: 5, name: "Libertea", description: "Dites adieu à la rétention d'eau", image: "../../assets/img/produits/libertea_300x.jpg", "prix": "14,99€" },

    { id: 6, name: "Habibtea", description: "Mélange oriental pour bien digérer", image: "../../assets/img/produits/Habitea_withlightercomposition_300x.jpg", prix: "14,99€" },
    { id: 7, name: "Green Energy", description: "Le mélange énergisant", "image": "../../assets/img/produits/GreenEnergy_withlightercomposition_300x.jpg", prix: "14,99€" },
    { id: 8, name: "Chocko Zen", description: "Plaisir chocolaté à 0 calorie", image: "../../assets/img/produits/Chocozen_withlightercomposition_300x.jpg", prix: "14,99€" },

    { id: 9, name: "Bamboo Thermos", description: "En bamboo naturel", image: "../../assets/img/produits/Bamboo-thermos_300x.jpg", prix: "29,90€" },
    { id: 10, name: "Infuser", description: "Double paroi protectrice", image: "../../assets/img/produits/glassinfuser_300x.jpg", prix: "29.90€" },
    { id: 11, name: "Urban bottle - Vert menthe", description: "Dites non au plastique", image: "../../assets/img/produits/urbanbottle-mint_300x.jpg", prix: "29,99€" },
    { id: 12, name: "Urban bottle - Violet", description: "Dites non au plastique", image: "../../assets/img/produits/urbanbottle-purple_300x.jpg", prix: "29,99€" }
  ]
}


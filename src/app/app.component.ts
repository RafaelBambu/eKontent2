import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public content = [];
  public slideConfig = {
    "slidesToShow": 3, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 3000, "infinite": true,
    arrows: false
  };

  constructor() {
    this.content = [
      {
        image: 'assets/images/content/marco-antonio-cazares.jpg',
        description: 'Los destinos más baratos de América Latina para viajar en 2017',
        author: 'Por: Alejandra Sanchez',
        type: 'Articulo'
      },
      {
        image: 'assets/images/content/marco-antonio-cazares.jpg',
        description: 'Los nuevos hallazgos de la ciencia desde el siglo XX hasta ahora',
        author: 'Por: Juan Pablo Hernández',
        type: 'Video'
      },
      {
        image: 'assets/images/content/marco-antonio-cazares.jpg',
        description: 'Los destinos más baratos de América Latina para viajar en 2017',
        author: 'Por: Alejandra Sanchez',
        type: 'Articulo'
      },
      {
        image: 'assets/images/content/marco-antonio-cazares.jpg',
        description: 'Los nuevos hallazgos de la ciencia desde el siglo XX hasta ahora',
        author: 'Por: Juan Pablo Hernández',
        type: 'Video'
      },
      {
        image: 'assets/images/content/marco-antonio-cazares.jpg',
        description: 'Los destinos más baratos de América Latina para viajar en 2017',
        author: 'Por: Alejandra Sanchez',
        type: 'Articulo'
      },
      {
        image: 'assets/images/content/marco-antonio-cazares.jpg',
        description: 'Los nuevos hallazgos de la ciencia desde el siglo XX hasta ahora',
        author: 'Por: Juan Pablo Hernández',
        type: 'Video'
      },
      {
        image: 'assets/images/content/marco-antonio-cazares.jpg',
        description: 'Los destinos más baratos de América Latina para viajar en 2017',
        author: 'Por: Alejandra Sanchez',
        type: 'Articulo'
      }
    ]
  }
  ngOnInit() { }
}


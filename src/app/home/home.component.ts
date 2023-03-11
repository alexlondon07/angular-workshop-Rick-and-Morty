import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  template: `
  <ul class="cards">
    <li
      class="cards_item"
      *ngFor="let character of characters"
      [style]="{'background-image':'url('+character.image+')'}"
    >
      <h3>{{character.name}}</h3>
      <a [routerLink]="['./detail', character.id]">details</a>
    </li>
  </ul>
`,
  styles: [
    `
    .cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .cards_item {
      flex-basis: calc(25% - 15px);
      aspect-ratio: 0.9;
      border-radius: 8px;
      cursor: pointer;
      background-repeat: no-repeat;
      background-size: cover;
      color: white;
      text-shadow: 0px 0px 3px black;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
    }
  `,
  ],
})
export class HomeComponent implements OnInit {
  apiURL = 'https://rickandmortyapi.com/api/character';
  characters = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.apiURL).subscribe((res: any) => {
      this.characters = res.results;
    });
  }
}

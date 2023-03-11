import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{name}}</h1>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AppComponent {
  name = 'Rick & Morty';
  constructor() {}
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  id: number;
  private sub: any;
  characterURL = 'https://rickandmortyapi.com/api/character/';
  character = {};
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.sub = this.route.params
      .pipe(
        switchMap((params) => this.http.get(this.characterURL + params['id']))
      )
      .subscribe((characterResponse) => {
        this.character = characterResponse;
        console.log(this.character);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

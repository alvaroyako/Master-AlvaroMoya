import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/Models/comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-comicsinyecion',
  templateUrl: './comicsinyecion.component.html',
  styleUrls: ['./comicsinyecion.component.css'],
})
export class ComicsinyecionComponent implements OnInit {
  public comics!: Array<Comic>;

  constructor(private _service: ComicsService) { }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

}

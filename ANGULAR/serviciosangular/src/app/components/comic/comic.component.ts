import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/Models/comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic!: Comic;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {
  public array: number[]
  constructor() {
    this.array = []
  }

  generarNumeros() {
    for (var i = 0; i < 10; i++) {
      this.array.push(Math.floor(Math.random() * 11) + 1);
    }

  }
  ngOnInit(): void {
    this.generarNumeros();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>
        Welcome to {{pokemonList [1]}}!
      </h1>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  pokemonList = ['Bulbizarre', 'Salamèche', 'Pikatchu'];

  ngOnInit(): void {
    console.log(this.pokemonList)
  }
}

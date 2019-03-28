import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('Tomatos', 10),
    new Ingredient('Carrots', 7)
  ];


  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}

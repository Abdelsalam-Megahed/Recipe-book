import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
  ingredientChanged= new EventEmitter <Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('Tomatos', 10),
    new Ingredient('Carrots', 7)
  ];

getIngredients(){
  return this.ingredients.slice();
}

addItem(ingredient : Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientChanged.emit(this.ingredients);
}


}

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
  ingredientChanged= new Subject <Ingredient[]>();

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
  this.ingredientChanged.next(this.ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
  this.ingredients.push(...ingredients);
  this.ingredientChanged.next(this.ingredients.slice());
}
}


import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{


  private recipes: Recipe[] = [
    new Recipe('A test Recipe',
    'this is simply a test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzo__jQo1a3qO-ai7EyJxPrzTrXUBJb4p_uvtuB-EJKSCrWcH8gg',
    [
      new Ingredient('Banana', 5),
      new Ingredient('bread', 3)
    ]),

    new Recipe('Another test Recipe',
     'this is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Peach', 5),
      new Ingredient('Apples', 3)
      ]),

    new Recipe('A test Recipe',
     'this is simply a test',
      'https://payload.cargocollective.com/1/9/290469/5930422/recipe-logo-1.jpg',
      [
        new Ingredient('Salade', 5),
        new Ingredient('Rice', 3)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipe(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(id: number){
   return this.recipes[id];
  }

}

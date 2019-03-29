import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{

  recipeSelected=  new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzo__jQo1a3qO-ai7EyJxPrzTrXUBJb4p_uvtuB-EJKSCrWcH8gg'),
    new Recipe('Another test Recipe', 'this is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A test Recipe', 'this is simply a test', 'https://payload.cargocollective.com/1/9/290469/5930422/recipe-logo-1.jpg')
  ];

  getRecipe(){
    return this.recipes.slice();
  }
}

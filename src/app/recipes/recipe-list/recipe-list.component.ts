import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzo__jQo1a3qO-ai7EyJxPrzTrXUBJb4p_uvtuB-EJKSCrWcH8gg'),
    new Recipe('Another test Recipe', 'this is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A test Recipe', 'this is simply a test', 'https://payload.cargocollective.com/1/9/290469/5930422/recipe-logo-1.jpg')


  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

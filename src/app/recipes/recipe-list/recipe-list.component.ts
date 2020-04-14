import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipes.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output () recipewasselected= new EventEmitter<Recipe>();

  recipes: Recipe[] = [
  new Recipe("Recipe", "This is Test", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
  new Recipe("New Recipe", "This New Recipe", "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeSel: Recipe){
  this.recipewasselected.emit(recipeSel);
  }
}

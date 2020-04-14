import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output () selectedRecipe = new EventEmitter<void>();

  @Input () recipe: Recipe;

  
  constructor() { }

  ngOnInit(): void {
    console.log("In ngOnInit");
  }

  onSelected(){
  this.selectedRecipe.emit();
  }

}

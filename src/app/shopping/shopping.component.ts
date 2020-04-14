import { Component, OnInit } from '@angular/core';
import{Ingredient} from '../shared/ingredient.model'
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Rose", 25)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  OnIngAdded(ingData: Ingredient){
  this.ingredients.push(ingData);

  }

}

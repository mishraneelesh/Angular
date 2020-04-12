import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
  new Recipe("New Recipe", "This is Test", "https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiIu_fA5dXoAhUlzjgGHSIzCi4QjRx6BAgBEAQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe_Unlimited_logo.png&psig=AOvVaw21oH0wDE39-MvyJRk_uLsy&ust=1586330969404742"),
  new Recipe("New Recipe", "This is Test", "https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwiIu_fA5dXoAhUlzjgGHSIzCi4QjRx6BAgBEAQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ARecipe_Unlimited_logo.png&psig=AOvVaw21oH0wDE39-MvyJRk_uLsy&ust=1586330969404742")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

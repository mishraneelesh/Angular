import { Component, OnInit, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  @Output() ingredientadded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddInput(){

    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmt = this.amountInputRef.nativeElement.value;
    const newIng = new Ingredient(ingredientName,ingredientAmt);
    this.ingredientadded.emit(newIng);
  }
}

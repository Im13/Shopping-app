import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://img.taste.com.au/mOx3fOxf/w720-h480-cfill-q80/taste/2022/09/garlic-chilli-prawn-pasta-181440-1.jpg'),
    new Recipe('A Test Recipe 1', 'Pasta with tomato cream sauce', 'https://hips.hearstapps.com/hmg-prod/images/easy-dinner-recipes-1676057761.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}

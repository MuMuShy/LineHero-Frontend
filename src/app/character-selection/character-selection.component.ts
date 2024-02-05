import { Component } from '@angular/core';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.scss']
})
export class CharacterSelectionComponent {
  selectedCharacter: string | null = null;
  gender:string = "male";
  description:string = "男性冒險者"

  selectCharacter(character: string): void {
    console.log("switch gender")
    if(this.gender == "male"){
      this.gender = "female"
      this.description = "女性冒險者"
    }
    else{
      this.gender = "male"
      this.description = "男性冒險者"
    }

    console.log(this.gender)
    this.selectedCharacter = character;
  }
}

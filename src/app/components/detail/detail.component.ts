import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  @Input("charProp")
  item: Character;

  @Input()
  index: number;

  @Output()
  removeCharEvent: EventEmitter<number>;

  constructor() {
    this.item = new Character("","", "","",0);
    this.index = 0;
    this.removeCharEvent = new EventEmitter<number>();    
  }

  removechar(): void {
    console.log("deleting char..." + this.index);
    this.removeCharEvent.emit(this.index);
  }

}

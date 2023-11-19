import { Component } from '@angular/core';
import { MovieCharService } from 'src/app/services/movie-char.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {

  characters: Character[] = [];
  

  constructor(private movieCharService: MovieCharService) {}

  addChar(): void {
    this.movieCharService.getCharacters().subscribe({
      next: (dataResult) => {
        this.characters = dataResult;
        console.log(this.characters);  
        
      },
      error: (error) => {
        console.log(error);        
      }
    })
  }

  showDetails(char: Character): void {
    char.isDetailed = !char.isDetailed;
  }

  removechar(index: number): void {
    this.movieCharService.deleteCharacter(index).subscribe({
      next: (data) => {
        alert("Character deleted successfully");
      },
      error: (e) => {
        console.log(e);        
      }
    })
  }

}

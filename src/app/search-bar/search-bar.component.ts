import { Component, Input } from '@angular/core';
import { Auto } from '../auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() autos :Auto[]=[]
  selectedAutos:Auto[]=[]
searchAutoList(searchString:string){
  this.selectedAutos=
  this.autos.filter(
    auto=>auto.brand.toUpperCase().includes(searchString.toUpperCase())
  )
}
}

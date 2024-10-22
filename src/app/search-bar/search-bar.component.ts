import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() autoEvent=new EventEmitter<Auto>();

  @Input() autos :Auto[]=[]
  selectedAutos:Auto[]=[]
searchAutoList(searchString:string){
  this.selectedAutos=
  this.autos.filter(
    auto=>auto.brand.toUpperCase().includes(searchString.toUpperCase())
  )
}

getAutoDetails(auto:Auto){
  this.selectedAutos=[]
  this.autoEvent.emit(auto);
}


}

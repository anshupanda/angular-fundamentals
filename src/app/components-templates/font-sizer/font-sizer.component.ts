import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-font-sizer',
  templateUrl: './font-sizer.component.html',
  styleUrls: ['./font-sizer.component.css']
})
export class FontSizerComponent {

  @Input()  size: number;
  @Output() sizeChange = new EventEmitter<number>();
 
  dec() { 
    this.size--;
    this.sizeChange.emit(this.size);
  }

  inc() { 
    this.size++;
    this.sizeChange.emit(this.size);
  }

}

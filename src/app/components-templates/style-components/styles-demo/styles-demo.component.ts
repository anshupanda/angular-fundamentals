import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-styles-demo',
  templateUrl: './styles-demo.component.html',
  styles: ['h1 { font-weight: normal; }', '.users-heading { color: #369;font-size: 30px; }']
})
export class StylesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    name: 'Human Torch',
    team: ['Mister Fantastic', 'Invisible Woman', 'Thing']
  };

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }

  @HostListener('mouseenter') onmouseenter(){
    console.log('mouse entered on styles demo component');
  }

}

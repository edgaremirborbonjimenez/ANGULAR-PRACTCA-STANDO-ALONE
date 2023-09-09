//Este componente sera ahora nuestra main, se hicieron ajustes en el archivo main.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-component-main',
  templateUrl: './component-main.component.html',
  styleUrls: ['./component-main.component.css'],
  standalone: true,
  imports:[
    RouterModule
  ]
})
export class ComponentMainComponent {

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
   @Input() photoCover: string ="";
   @Input() cardDate: string = "";
   @Input() cardTitle: string = "";
}

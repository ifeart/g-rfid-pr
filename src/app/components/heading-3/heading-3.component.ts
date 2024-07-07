import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-3',
  templateUrl: './heading-3.component.html',
  styleUrl: './heading-3.component.scss'
})
export class Heading3Component {
  @Input() headingText: string = '';
}

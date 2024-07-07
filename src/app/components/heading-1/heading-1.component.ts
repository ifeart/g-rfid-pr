import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-1',
  templateUrl: './heading-1.component.html',
  styleUrl: './heading-1.component.scss'
})
export class Heading1Component {
  @Input() bigheadingText: string = '';
}

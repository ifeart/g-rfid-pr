import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-text',
  templateUrl: './default-text.component.html',
  styleUrl: './default-text.component.scss'
})
export class DefaultTextComponent {
  @Input() defaultText: string = '';
}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.scss'
})
export class DefaultButtonComponent {
  @Input() rLink = "";
  @Input() buttonText: string = "Кнопочка";
  @Input() buttonColor: string = "primary";
}

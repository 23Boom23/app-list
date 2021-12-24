import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-el',
  templateUrl: './list-el.component.html',
  styleUrls: ['./list-el.component.scss'],
})
export class ListElComponent {
  @Input() my: any;
}


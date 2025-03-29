import { Component, EventEmitter, OnInit, Output, input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [MatCardModule],
})
export class CardComponent implements OnInit {
  constructor() {}
  readonly title = input<string>();
  readonly content = input<string>();
  readonly route = input<string>();
  ngOnInit() {}
  @Output() cardClicked = new EventEmitter();
  onCardClick() {
    this.cardClicked.emit(this.route());
  }
}

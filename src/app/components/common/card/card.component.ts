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
  title = input<string>();
  content = input<string>();
  route = input<string>();
  ngOnInit() {}
  @Output() cardClicked = new EventEmitter();
  onCardClick() {
    console.log(this.title());
    this.cardClicked.emit(this.route());
  }
}

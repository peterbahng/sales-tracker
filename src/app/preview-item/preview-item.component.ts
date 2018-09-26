import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../submit-item/item.model';

@Component({
  selector: 'app-preview-item',
  templateUrl: './preview-item.component.html',
  styleUrls: ['./preview-item.component.css']
})
export class PreviewItemComponent implements OnInit {
  @Input() item: Item;
  rate = 0;
  profit = 0;

  constructor() { 
  }

  ngOnInit() {
  }


}

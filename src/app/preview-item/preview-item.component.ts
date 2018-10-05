import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../submit-item/item.model';

@Component({
  selector: 'app-preview-item',
  templateUrl: './preview-item.component.html',
  styleUrls: ['./preview-item.component.css']
})
export class PreviewItemComponent implements OnInit {
  @Input() item: Item;


  constructor() {
  }



// if eBay, then first should be Grailed, second should be StockX
// if Grailed, then first should be eBay, second should be StockX
// if StockX, then first should be Grailed, second should be eBay


  ngOnInit() {
  }

}

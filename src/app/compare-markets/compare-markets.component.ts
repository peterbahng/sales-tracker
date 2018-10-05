import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../submit-item/item.model';


@Component({
  selector: 'app-compare-markets',
  templateUrl: './compare-markets.component.html',
  styleUrls: ['./compare-markets.component.css']
})
export class CompareMarketsComponent implements OnInit {
  @Input() item: Item;
  marketComparisons = [];

  constructor() { 
    // const first = this.item.marketplace === 'StockX' ? 'Grailed' : this.item.marketplace === 'Grailed' ? 'eBay' : 'Grailed'
    // this.marketComparisons.push(first);
    console.log(this.marketComparisons);
  }

  ngOnInit() {
  }

}

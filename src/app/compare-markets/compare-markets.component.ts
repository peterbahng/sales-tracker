import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../submit-item/item.model';

@Component({
  selector: 'app-compare-markets',
  templateUrl: './compare-markets.component.html',
  styleUrls: ['./compare-markets.component.css']
})
export class CompareMarketsComponent implements OnInit {
  @Input()
  item: Item;
  marketComparisons = [
    {
      marketplace: '',
      rate: 0,
      profit: 0,
    },
    {
      marketplace: '',
      rate: 0,
      profit: 0,
    }
  ];

  constructor() {}

  ngOnInit() {
    this.setMarketComparisons();
  }

  setMarketComparisons() {
    this.marketComparisons[0].marketplace =
      this.item.marketplace === 'StockX'
        ? 'Grailed'
        : this.item.marketplace === 'Grailed'
          ? 'eBay'
          : 'Grailed';
    this.marketComparisons[1].marketplace =
      this.item.marketplace === 'Grailed'
        ? 'StockX'
        : this.item.marketplace === 'eBay'
          ? 'StockX'
          : 'eBay';

    this.marketComparisons[0].rate = this.getRate(
      this.marketComparisons[0].marketplace
    );
    this.marketComparisons[1].rate = this.getRate(
      this.marketComparisons[1].marketplace
    );

    // this.marketComparisons[0].profit = this.calculateProfit(this.marketComparisons[0].marketplace);
    // this.marketComparisons[1].profit = this.calculateProfit(this.marketComparisons[1].marketplace);
  }

  getRate(market) {
    let calculatedRate;
    switch (market) {
      case 'eBay':
        calculatedRate = 0.1;
        calculatedRate = this.applyFees(calculatedRate);
        break;
      case 'Grailed':
        calculatedRate = 0.06;
        calculatedRate = this.applyFees(calculatedRate);
        break;
      case 'StockX':
        calculatedRate = 0.085;
        calculatedRate = this.applyFees(calculatedRate);
        break;
      default:
        break;
    }
    return calculatedRate;
  }

  calculateProfit(marketplace) {
    let merchantCommission = 0;
    if (this.item.pricePurchased && this.item.priceSold) {
      merchantCommission = this.item.priceSold * this.getRate(marketplace);
      merchantCommission = merchantCommission - 0.3; // Apply fixed Paypal fee
      const profit = this.item.priceSold - merchantCommission;
      return profit - this.item.pricePurchased;
    }
  }

  applyFees(rate) {
    return rate + 0.03; // Apply base rate Paypal fee
  }
}

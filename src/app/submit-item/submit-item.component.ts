import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-submit-item',
  templateUrl: './submit-item.component.html',
  styleUrls: ['./submit-item.component.css']
})
export class SubmitItemComponent implements OnInit {
  item: Item = new Item('', '', 0, false, '', 1, 0, 0);
  // @Output() marketSelected = new EventEmitter<string>();

  constructor(private itemService: ItemService) {}

  ngOnInit() {}

  submitItem() {
    const merchant = this.item.merchant;
    const itemName = this.item.itemName;
    const pricePurchased = this.item.pricePurchased;
    const sold = this.item.sold;
    const marketplace = this.item.marketplace;
    const rate = this.item.rate;
    const priceSold = this.item.priceSold;
    const profit = this.item.profit;
    const newItem = new Item(
      merchant,
      itemName,
      pricePurchased,
      sold,
      marketplace,
      rate,
      priceSold,
      profit
    );
    this.itemService.submitItem(newItem);
    this.resetItem();
  }

  resetItem() {
    this.item.merchant = '';
    this.item.itemName = '';
    this.item.pricePurchased = 0;
    this.item.sold = false;
    this.item.marketplace = '';
    this.item.rate = 0;
    this.item.priceSold = 0;
    this.item.profit = 0;
  }

  onMarketOptionSelected() {
    this.item.rate = this.getRate();
    // this.marketSelected.emit(this.item.marketplace);
  }

  getRate() {
    let rate;
    switch (this.item.marketplace) {
      case 'eBay':
        rate = 0.1;
        rate = this.applyFees(rate);
        break;
      case 'Grailed':
        rate = 0.06;
        rate = this.applyFees(rate);
        break;
      case 'StockX':
        rate = 0.085;
        rate = this.applyFees(rate);
        break;
      case 'Other':
        rate = 0;
        // rate will get set by the input field, as this is sourced by ngModel
        break;
      default:
        break;
    }
    return rate;
  }

  calculateProfit() {
    let merchantCommission = 0;
    if (
      this.item.marketplace &&
      this.item.pricePurchased &&
      this.item.priceSold
    ) {
      merchantCommission = this.item.priceSold * this.item.rate;
      if (this.item.marketplace !== 'Other') {
        merchantCommission = merchantCommission - 0.3; // Apply fixed Paypal fee
      }
      const profit = this.item.priceSold - merchantCommission;
      this.item.profit = profit - this.item.pricePurchased;
    }
  }

  applyFees(rate) {
    return rate + 0.03; // Apply base rate Paypal fee
  }
}

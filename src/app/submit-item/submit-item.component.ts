import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-submit-item',
  templateUrl: './submit-item.component.html',
  styleUrls: ['./submit-item.component.css']
})
export class SubmitItemComponent implements OnInit {
  item: Item = new Item('', '', 0, false, '', 0);

  constructor(private itemService: ItemService) {}

  ngOnInit() {}

  submitItem() {
    const merchant = this.item.merchant;
    const itemName = this.item.itemName;
    const pricePurchased = this.item.pricePurchased;
    const sold = this.item.sold;
    const marketplace = this.item.marketplace;
    const priceSold = this.item.priceSold;
    const newItem = new Item(
      merchant,
      itemName,
      pricePurchased,
      sold,
      marketplace,
      priceSold
    );
    this.itemService.submitItem(newItem);
    this.item.merchant = '';
    this.item.itemName = '';
    this.item.pricePurchased = 0;
    this.item.sold = false;
    this.item.marketplace = '';
    this.item.priceSold = 0;
  }
}

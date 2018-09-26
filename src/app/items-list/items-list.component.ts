import { Component, OnInit } from '@angular/core';
import { Item } from '../submit-item/item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  items: Item[] = [];
  displayedColumns = ['Merchant', 'Item Name', 'Price Purchased', 'Marketplace', 'Price Sold'];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items = this.itemService.getItems();
  }

}

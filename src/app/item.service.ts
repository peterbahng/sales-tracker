import { Injectable } from '@angular/core';
import { Item } from './submit-item/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  submitItem(item) {
    this.items.push(item);
  }
}

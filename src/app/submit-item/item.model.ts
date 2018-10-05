export class Item {
  marketOptions = [
    { value: 'eBay' },
    { value: 'Grailed' },
    { value: 'StockX' },
    { value: 'Other' }
  ];

  constructor(
    public merchant: string,
    public itemName: string,
    public pricePurchased: number,
    public sold: boolean,
    public marketplace?: string,
    public rate?: number,
    public priceSold?: number,
    public profit?: number
  ) {}
}

export interface OrderData {
    uId:String;
    items: OrderItem[];
    tmstp:number;

  }
export interface Item{
    name:String;
    pid:String;
    quantity:number;
    price:number;//single item price
}
export interface OrderItem{
    items:Item[];
    total:number;
}

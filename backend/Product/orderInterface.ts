import { Cart } from "../User/userInterface.router";

export interface OrderData {
    uId:String;
    items: Cart[];
    tmstp:number;

  }


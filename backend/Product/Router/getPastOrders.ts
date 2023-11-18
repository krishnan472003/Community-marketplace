import { Router } from "express"
import { UserModel } from "../../User/Model/userSchema";
import { OrderModel } from "../Model/orderSchema";



const getLatLong = async (latestOrder) => {
    let latLong = [];
    let latestCart = (latestOrder as any).cart.items;
    for (const cartItem of latestCart) {
      let uId = cartItem.sellerUId;
      console.log(uId);
      let user = await UserModel.findOne({ uId });
      if (user) {
        let finalObj = {
          lngLat: [user.longitude,user.latitude],
          color:"blue",
          name: cartItem.name,
        };
        latLong.push(finalObj);
      } else {
        console.error(`User with uId ${uId} not found.`);
      }
    }
    console.log(latLong)
    
    return latLong;
  };
  


export const PastOrders = ()=>{
    const router = Router();
    router.get("/pastOrder",async (req,res)=>{
        const uId = req.query.uId;
        const userOrders = await OrderModel.find({
            uId: String(uId),
            'cart.total': { $ne: 0 } // Exclude documents where 'cart.total' is not equal to 0
          }).sort({ tmstp: -1 });
        let pastOrder =[]
        userOrders.forEach(async (CartItem)=>{
            let data = {tmstp:CartItem.tmstp,total: CartItem.cart.total}
            let productName = []
            CartItem.cart.items.forEach((item) => {
                let product = {
                    name:item.name,
                    quantity:item.quantity
                }
                productName.push(product)
            });
                data["products"] = productName;
                pastOrder.push(data)
        })
        let latestOrder = userOrders[0];
        let coordinates = await getLatLong(latestOrder);
        res.json({status:200,pastOrder,coordinates})
    })
    return router;
}
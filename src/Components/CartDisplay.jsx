import { useEffect, useState } from "react";
import { useGlobal } from "../Context/context";
import { HorizCard } from "./Cards/horizCard";

export const CartDisplay = () => {
  const { state } = useGlobal();
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalMrp, setTotalMrp] = useState(0);
  
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let totalPrice = state.cart.reduce(
      (a, b) => {
        return { price: a.price + b.price * b.qty };
      },
      { price: 0 }
    );
    setTotalPrice(totalPrice.price);
    
    let totalMrp = state.cart.reduce(
      (a, b) => {
        return { mrp: parseInt(a.mrp) + parseInt(b.mrp) * parseInt(b.qty) };
      },
      { mrp: 0 }
    );
    setTotalMrp(totalMrp.mrp);

  }, [state]);
console.log(totalMrp, totalPrice, discount)
  return (
    <div style={{display:"flex",justifyContent:'space-evenly'}}>
      {state.cart.length < 0 ? (
        <h1>No item in cart</h1>
      ) : (
        state.cart.map((product) => <HorizCard product={product} />)
      )}
      {
          state.cart.length > 0 ? (
            <div style={{border:'1px solid black', display:'inline-block',padding:'1rem'}} >
            <p>Total Price{totalMrp}</p>
            <p>Discount { totalMrp - totalPrice}</p>
            <p>Total Payable { totalPrice}</p>
          </div>
          ): null
      }
    </div>
  );
};

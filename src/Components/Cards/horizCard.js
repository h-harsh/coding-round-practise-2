import { useGlobal } from "../../Context/context"

export const HorizCard = ({product}) => {
    const {state, dispatch} = useGlobal()
    return(
        <>
        	<div class="horiz-card">
    	<div class="horiz-prod">
        	<div class="horiz-prod-sub">
            	<div>
                    <img class="horiz-prod-img"
                      src={product.imageURL} alt="" />
                 </div>
                 <div class="horiz-prod-sub-in">
                    <p class="brand-name">{product.brand}</p>
                    <h3 class="product-name">{product.name}</h3>
                    <p class="prod-desc">Hello this is one of a kind</p>
                   <div class="horiz-prod-btns">
                      <button class="btn btn-link1 horiz-" disabled={product.qty <= 1 ? true: false} onClick={() => dispatch({type:"DECREASE_QTY", payload:product})}>-</button>
                      <p class="horiz-prod-qty">{product.qty}</p>
                      <button class="btn btn-link1 horiz-" onClick={() => dispatch({type:"INCREASE_QTY",payload:product})} >+</button>
                    </div>
                  </div>
                </div>
                <div class="horiz-prod-price">
                  <div class="horiz-prod-price1">₹ {product.price}</div>
                  <div class="horiz-prod-price2">
                    <p class="price-orig">₹ {product.mrp}</p>
                    <p>({product.discount}% off)</p>
                  </div>
                </div>
              </div>
              <div class="buttons-horizontal">
                <button class="nm-btn2 horiz" onClick={() => dispatch({type:"ADD_SAVE_FOR_LATER", payload:product})}>Save for later</button>
                <button class="nm-btn2 horiz" onClick={() => dispatch({type:"REMOVE_FROM_CART", payload:product})} >Remove</button>
              </div>
            </div>
        </>
    )
}
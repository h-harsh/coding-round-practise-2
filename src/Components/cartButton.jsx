import { useGlobal } from "../Context/context";

export const CartButton = ({ product }) => {
  const { state, dispatch } = useGlobal();
  const hakini = state.cart.filter((item) => item.id === product.id);
  return (
    <>
      {hakini.length > 0 ? (
        <button className="nm-btn2">Go To Cart</button>
      ) : (
        <button
          className="nm-btn2"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        >
          Add to cart
        </button>
      )}
    </>
  );
};

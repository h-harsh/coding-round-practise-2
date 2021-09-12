export const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, qty: action.payload.qty + 1 },
        ],
      };
    case "REMOVE_FROM_CART":
      const currProd = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: currProd };
    case "INCREASE_QTY":
      const tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: parseInt(item.qty) + 1 };
        } else return item;
      });
      return { ...state, cart: tempCart };
    case "DECREASE_QTY":
      const tempCart2 = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: parseInt(item.qty) - 1 };
        } else return item;
      });
      return { ...state, cart: tempCart2 };
    case "ADD_SAVE_FOR_LATER":
      const currProd3 = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        saveLater: [...state.saveLater, action.payload],
        cart: currProd3,
      };
    case "ADD_TO_CART_FROM_SAVED":
        const savedFilter = state.saveLater.filter(
            (item) => item.id !== action.payload.id
          );
        return {
            ...state,
            saveLater:savedFilter,
            cart: [
              ...state.cart,
              { ...action.payload, qty: action.payload.qty + 1 },
            ],
          };
    default:
      return state;
  }
};

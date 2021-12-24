export const initialState = {
  basket: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      // logic for removing from basket

      // we cloned the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove (id: ${action.id}) as it is not existing`);
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;

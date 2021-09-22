import idMaker from "./Components/idMaker";

export const initialState = {
  basket: [
    {
      id: idMaker,
      img: "a",
      category: "Posters",
    },
    {
      id: idMaker,
      img: "a",
      category: "Posters",
    },
  ],
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // logic for removing from basket

      // we cloned the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket remove it
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

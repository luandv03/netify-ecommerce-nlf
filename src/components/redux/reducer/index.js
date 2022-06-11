const cart = [];

const reducer = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADD_PRODUCT":
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    case "DELETE_PRODUCT":
      const exist1 = state.find((item) => item.id === product.id);

      if (exist1.qty === 1) {
        return state.filter((item) => item.id !== exist1.id);
      } else {
        return state.map((item) =>
          item.id === exist1.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
      break;
    case "REMOVE_PRODUCT":
      return state.filter((item) => item.id !== product.id);
      break;
    default:
      return state;
  }
};

export default reducer;

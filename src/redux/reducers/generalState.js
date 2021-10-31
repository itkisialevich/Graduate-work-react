import productJSON from "../../components/product.json";

const defaultState = {
  allproducts: productJSON,
  filteredProducts: [],
  type: "ALL",
};

export const generalState = (state = defaultState, action) => {
  switch (action.type) {
    case "sortReset": {
      const filteredProducts = state.allproducts.sort(
        () => Math.round(Math.random() * 100) - 50
      );
      return {
        ...state,
        allproducts: filteredProducts,
        filteredProducts: filteredProducts,
      };
    }
    case "sortLowToHigh": {
      const filteredProducts = state.allproducts.sort(function (a, b) {
        return a.price - b.price;
      });
      return {
        ...state,
        allproducts: filteredProducts,
        filteredProducts: filteredProducts,
      };
    }
    case "sortHighToLow": {
      const filteredProducts = state.allproducts.sort(function (a, b) {
        return b.price - a.price;
      });
      return {
        ...state,
        allproducts: filteredProducts,
        filteredProducts: filteredProducts,
      };
    }
    case "handleCheckboxChange": {
      const filteredProducts = state.allproducts.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
      return {
        ...state,
        allproducts: filteredProducts,
        filteredProducts: filteredProducts,
      };
    }
    default:
      return state;
  }
};

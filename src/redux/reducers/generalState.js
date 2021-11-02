import productJSON from "../../components/product.json";

const defaultState = {
  allproducts: productJSON,
  filteredProducts: productJSON,
  wishlist: [],
  basket: [],
  total: 0,
  type: "ALL",
  show: false,
};

export const generalState = (state = defaultState, action) => {
  switch (action.type) {
    case "onClickSearch": {
      const filteredProducts = productJSON.filter(
        (item) =>
          item.title.toLowerCase().includes(action.text.toLowerCase()) ||
          item.description.toLowerCase().includes(action.text.toLowerCase()) ||
          item.type.toLowerCase().includes(action.text.toLowerCase()) ||
          item.color.toLowerCase().includes(action.text.toLowerCase()) ||
          item.material.toLowerCase().includes(action.text.toLowerCase())
      );
      return {
        ...state,
        //allproducts: filteredProducts,
        filteredProducts: filteredProducts,
      };
    }

    case "showFilters": {
      return {
        ...state,
        show: !state.show,
      };
    }

    case "sortReset": {
      const filteredProducts = [...state.allproducts].sort(
        () => Math.round(Math.random() * 100) - 50
      );
      return {
        ...state,
        allproducts: filteredProducts,
        filteredProducts: filteredProducts,
      };
    }

    case "sortLowToHigh": {
      const filteredProducts = [...state.allproducts].sort(function (a, b) {
        return a.price - b.price;
      });

      return {
        ...state,
        allproducts: filteredProducts,
        filteredProducts: filteredProducts,
      };
    }

    case "sortHighToLow": {
      const filteredProducts = [...state.allproducts].sort(function (a, b) {
        return b.price - a.price;
      });
      return {
        ...state,
        allproducts: filteredProducts,
        filteredProducts: filteredProducts,
      };
    }

    case "handleCheckboxChange": {
      const isProductInWishList = state.wishlist.find(
        (item) => item.id === action.id
      );

      const filteredProducts = state.allproducts.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            isFavourite: !item.isFavourite,
          };
        }
        return item;
      });

      if (isProductInWishList) {
        const filteredWishList = state.wishlist.filter((product) => {
          if (product.id === action.id) {
            return false;
          }

          return true;
        });

        return {
          ...state,
          allproducts: filteredProducts,
          filteredProducts: filteredProducts,
          wishlist: filteredWishList,
        };
      }

      const foundProduct = state.allproducts.find(
        (item) => item.id === action.id
      );

      return {
        ...state,
        allproducts: filteredProducts,
        filteredProducts: filteredProducts,
        wishlist: [...state.wishlist, foundProduct],
      };
    }

    case "addBasket": {
      const isProductInBacket = state.basket.find(
        (item) => item.id === action.id
      );

      if (isProductInBacket) {
        return state;
      }

      const foundProduct = state.allproducts.find(
        (item) => item.id === action.id
      );

      const newBacket = [...state.basket, foundProduct];

      const total = newBacket.reduce(
        (accumulator, product) => accumulator + product.price,
        0
      );

      return { ...state, basket: [...state.basket, foundProduct], total };
    }

    case "deleteFromBasket": {
      const filteredProducts = state.basket.filter(
        (item) => item.id !== action.id
      );

      const total = filteredProducts.reduce(
        (accumulator, product) => accumulator + product.price,
        0
      );

      return { ...state, basket: filteredProducts, total };
    }

    case "deleteFromWishlist": {
      const filteredProducts = state.wishlist.filter(
        (item) => item.id !== action.id
      );
      return { ...state, wishlist: filteredProducts };
    }
    default:
      return state;
  }
};

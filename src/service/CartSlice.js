// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totals: {
    netTotal: 0,
    taxes: 0,
    shippingCharges: 0,
    total: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { productId, quantity, name, discountprice, imageUrl, size } =
        action.payload;
      const existingProduct = state.products.find(
        (product) => product.productId === productId
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.products.push({
          productId,
          quantity,
          name,
          discountprice,
          imageUrl,
          size,
        });
      }
      calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity, size } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.productId === productId
      );
      if (existingProduct) {
        existingProduct.quantity += quantity;
        if (existingProduct.quantity <= 0) {
          state.products = state.products.filter(
            (product) => product.productId !== productId
          );
        }
        calculateTotals(state);
      }
    },
    removeItem: (state, action) => {
      const { productId, size } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.productId === productId
      );
      if (existingProduct) {
        existingProduct.quantity = 0;
        state.products = state.products.filter(
          (product) => product.productId !== productId
        );
        calculateTotals(state);
      }
    },
    calculateTotals: (state) => {
      const netTotal = state.products.reduce(
        (total, product) => total + product.discountprice * product.quantity,
        0
      );

      const taxes = netTotal * 0.028; // 2.8% tax

      const noOfProducts = parseFloat(import.meta.env.VITE_NO_OF_PRODUCTS);
      const shippingCharges = parseFloat(import.meta.env.VITE_SHIPPING_CHARGES);

      console.log(
        "no",
        state.products.map((product) => ({
          name: product.name,
          quantity: product.quantity,
        })),
        "shi",
        shippingCharges
      ); // Debugging line to check the values

      const shippingChargesFinal =
        state.products.length >= 2 ||
        (state.products.length === 1 && state.products[0].quantity >= 2)
          ? 0
          : shippingCharges;

      const total = netTotal + taxes + shippingChargesFinal;

      state.totals = {
        netTotal,
        taxes,
        shippingCharges: shippingChargesFinal,
        total,
      };
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addItem,
  updateQuantity,
  removeItem,
  calculateTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

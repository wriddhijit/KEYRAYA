import { create } from "zustand";

export const usePrice = create((set) => ({
  checkoutPrice: null,
  setCheckoutPrice: (value) => set({ checkoutPrice: value }),
}));

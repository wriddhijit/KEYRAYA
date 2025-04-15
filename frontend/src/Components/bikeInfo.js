import { create } from "zustand";

export const useBike = create((set) => ({
  bikeID: null,
  setbikeID: (value) => set({ bikeID: value }),
}));

import { create } from "zustand";

export const usePickupDate = create((set) => ({
  pickedValue: null,
  setPickedValue: (value) => set({ pickedValue: value }),
}));

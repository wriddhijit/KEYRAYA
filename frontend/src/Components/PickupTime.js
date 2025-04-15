import { create } from "zustand";

export const usePickupTime = create((set) => ({
  pickedTime: null,
  setPickedTime: (value) => set({ pickedTime: value }),
}));

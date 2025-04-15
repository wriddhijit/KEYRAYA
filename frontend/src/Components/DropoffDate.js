import { create } from "zustand";

export const useDropoffDate = create((set) => ({
  pickedValue1: null,
  setPickedValue: (value) => set({ pickedValue1: value }),
  
}));

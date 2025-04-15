import { create } from "zustand";

export const useDropoffTime = create((set) => ({
  pickedTime1: null,
  setPickedTime: (value) => set({ pickedTime1: value }),
}));

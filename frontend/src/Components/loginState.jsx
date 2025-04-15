import create from 'zustand';

const useAuthStore = create((set) => ({
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
    isSignedUp: false,
    signUp: () => set({ isSignedUp: true }),
    resetSignUp: () => set({ isSignedUp: false }),
}));


export default useAuthStore;

// create zustand store
import { create } from 'zustand';

// create a store with user object
export const useMainStore = create(set => ({
    user: {
        fullName: '',
        dateOfBirth: '',
        email: '',
        club: '',
        nickname: '',
        phoneNumber: '',
        positions: [],
    },
    setUser: user => set({ user }),
}));
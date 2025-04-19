import { create } from "zustand";

const useStore = create((set) => ({
    countries: [],
    loading: false,
    error: null,
    setCountries: (countries) => set({ countries }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error })
}));

export default useStore;

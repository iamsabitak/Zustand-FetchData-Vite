import { create } from "zustand";

export const useStore = create((set) => ({
  data: [],
  fetchdata: async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      const users = data.users;
      console.log(users);
      set({ data: users });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));

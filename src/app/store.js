import axios from "axios";
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
  postdata: async (input) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        { name: input }
      );
      // set({ data: [res.data] });
      return res.data;
    } catch (error) {
      console.log("Error", error);
    }
  },
}));

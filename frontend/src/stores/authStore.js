import { create } from "zustand";

const authStore = create((set) => ({
  user: null,
  loading: true,

  register: async (username, email, password) => {
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Sėkmingai užsiregistravote!");
      set({ user: data, loading: false });
    } else {
      alert(data.message);
    }
  },

  login: async (email, password) => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Sėkmingai prisijungėte!");
      set({ user: data, loading: false });
    } else {
      alert(data.message);
    }
  },

  logout: async () => {
      console.log("out")
    await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    set({ user: null });
  },

  check: async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/check", {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        set({ user: data, loading: false });
      } else {
        set({ user: null, loading: false }); 
      }
    } catch(err) {
      console.log(err)
      set({ user: null, loading: false });
    }
  },
}));

export default authStore;
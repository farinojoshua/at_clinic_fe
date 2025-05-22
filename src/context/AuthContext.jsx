import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Initialize user state from localStorage if available
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  
  

  // Save user to localStorage on change
  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user]);

  // Login function: call backend API to authenticate user
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
console.log (response);
      if (!response.ok) {
        const errorData = await response.json();
        return { success: false, message: errorData.message || "Login failed" };
      }

      const data = await response.json();
      console.log(data);
      setUser(data.data);
      navigate("/");
      console.log("user di authcontext", user);
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message || "Login failed" };
    }
  };

  // Register function: call backend API to create new user
  const register = async (userInfo) => {
    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return { success: false, message: errorData.message || "Registration failed" };
      }

      const data = await response.json();
      setUser(data.user);
      navigate("/");
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message || "Registration failed" };
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

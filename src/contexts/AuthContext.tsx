import React, { createContext, useContext, useState, useEffect } from "react";
import { User, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase"; // Ensure this path is correct

interface UserWithRole extends User {
  role: "student" | "teacher"; // Add role to user
}

interface AuthContextType {
  user: UserWithRole | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserWithRole | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Mock role differentiation logic
        const role = firebaseUser.email?.includes("@teacher") ? "teacher" : "student";
        const userWithRole: UserWithRole = { ...firebaseUser, role };
        setUser(userWithRole); // Add role to user object
      } else {
        setUser(null);
      }
      setLoading(false); // Stop loading after auth state is determined
    });
    return () => unsubscribe();
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error during login:", error);
      throw new Error("Invalid credentials or other login error.");
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
      throw new Error("Logout failed.");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

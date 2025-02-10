import { NavigationContainer } from "@react-navigation/native";

import { MainNavigator } from "./src/navigation/MainNavigator";

import { SafeAreaView } from "react-native";

import { useState } from "react";

import { AuthNavigator } from "./src/navigation/auth/AuthNavigator";

import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { db, storage } from "./src/config/firebase"; // Firebase import




export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <AuthWrapper />
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>
  );
}
const AuthWrapper = () => {
  const { user } = useAuth();

  return user ? <MainNavigator /> : <AuthNavigator />;
};

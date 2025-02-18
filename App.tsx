import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./src/navigation/MainNavigator";
import { SafeAreaView } from "react-native";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { AuthNavigator } from "./src/navigation/auth/AuthNavigator";

export default function App() {
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
  const { user } = useAuth(); // Get user from AuthContext

  // If user is logged in, show MainNavigator, else show AuthNavigator
  return user ? <MainNavigator /> : <AuthNavigator />;
};

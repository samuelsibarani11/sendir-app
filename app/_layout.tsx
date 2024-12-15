import { useEffect, useState } from "react";
import { Stack, useRouter, Slot } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Periksa token login
        const userToken = await AsyncStorage.getItem("userToken");
        setIsLoggedIn(!!userToken); // True jika token ada
      } catch (error) {
        console.error("Gagal memeriksa token login:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0088FF" />
      </View>
    );
  }

  if (!isLoggedIn) {
    return (
      <Stack screenOptions={{ headerShown: false }}> {/* Hide headers for login flow */}
        <Stack.Screen name="login" options={{ headerShown: false }} /> {/* No back button */}
      </Stack>
    );
  }

  return (
    <Stack>
      <Stack.Screen name="camera-register" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}

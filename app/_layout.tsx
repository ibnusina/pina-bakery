import { Stack } from "expo-router";
import "../global.css";
import ReactGA from "react-ga";
import { useEffect } from "react";

ReactGA.initialize("G-49LQ6M85WH");

export default function RootLayout() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

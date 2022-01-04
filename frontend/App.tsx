import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ResultsScreen from "./src/screens/ResultsScreen";
// import {
//   OpenSans_300Light,
//   OpenSans_400Regular,
//   OpenSans_600SemiBold,
//   OpenSans_700Bold,
// } from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const App = () => {
  // let [fontsLoaded, error] = useFonts({
  //   Light: OpenSans_300Light,
  //   Regular: OpenSans_400Regular,
  //   SemiBold: OpenSans_600SemiBold,
  //   Bold: OpenSans_700Bold,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ResultsScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

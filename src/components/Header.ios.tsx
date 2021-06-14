import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

interface HeaderProps {
  onPress: () => void;
  isDarkMode: boolean;
}

export function Header({ onPress, isDarkMode }: HeaderProps) {
  const titleButton = isDarkMode ? "Light" : "Dark";

  return (
    <SafeAreaView
      style={[styles.container, isDarkMode && styles.headerDarkMode]}
    >
      <View style={[styles.header, isDarkMode && styles.headerDarkMode]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: "Poppins-SemiBold" }]}>
          do
        </Text>
        <TouchableOpacity onPress={onPress} style={[styles.headerButton]}>
          <Text>{titleButton} Mode</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#273FAD",
  },
  header: {
    paddingBottom: 44,
    backgroundColor: "#273FAD",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerDarkMode: {
    backgroundColor: "#483C67",
  },
  headerText: {
    fontSize: 24,
    color: "#FFF",
    fontFamily: "Poppins-Regular",
  },
  headerButton: {
    backgroundColor: "white",
    position: "absolute",
    right: 10,
    padding: 5,
    borderRadius: 5,
  },
});

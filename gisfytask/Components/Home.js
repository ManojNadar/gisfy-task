import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.textContainer}
        onPress={() => {
          navigation.navigate("login");
        }}
      >
        Add
      </Text>
      <Text style={styles.textContainer}>Edit</Text>
      <Text
        onPress={() => {
          navigation.navigate("Viewdetails");
        }}
        style={styles.textContainer}
      >
        View
      </Text>
      <Text style={styles.textContainer}>Sync</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  textContainer: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 15,
    backgroundColor: "yellow",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 22,
    fontWeight: "bold",
  },
});

import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    name: "",
    classes: "",
    link: "",
  });
  const [img, setImg] = useState("");

  //   console.log(data);
  //   console.log(img);

  function handleChange(value, name) {
    setData((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const submitData = async () => {
    const { name, classes, link } = data;

    if (name && classes && link && img) {
    } else {
      alert("all fileds are mandatory");
    }
  };

  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 33, fontWeight: "bold" }}>
        Data
      </Text>

      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => handleChange(text, "name")}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text>Class</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => handleChange(text, "classes")}
        />
      </View>

      <View style={styles.pic}>
        <Button title="Choose Image" onPress={pickImageAsync}></Button>
      </View>

      <View style={styles.inputContainer}>
        <Text>Map</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => handleChange(text, "link")}
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Button title="save" onPress={submitData} />
      </View>
      <View style={{ marginVertical: 10 }}>
        <Button
          title="cancel"
          onPress={() => {
            navigation.navigate("home");
          }}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  inputContainer: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 15,
  },
  inputStyle: {
    borderColor: "blue",
    borderWidth: 2,
    width: "100%",
    paddingVertical: 3,
  },
  pic: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

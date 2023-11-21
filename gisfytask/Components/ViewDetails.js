import { View, Text, Image, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import React, { useEffect, useState } from "react";
import api from "../ApiConfig/Api";
import MapView from "react-native-maps";

const ViewDetails = () => {
  const [details, setDetails] = useState([]);

  console.log(details);
  useEffect(() => {
    async function fetchdetails() {
      try {
        const response = await api.get("/fetchdetails");

        if (response.data.success) {
          setDetails(response.data.details);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchdetails();
  }, []);

  const injectedJavaScript = `
  window.addEventListener('load', () => {
    alert('Web page loaded!');
  });
`;
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 22,
          textAlign: "center",
          fontWeight: "bold",
          color: "green",
          marginVertical: 15,
        }}
      >
        Details
      </Text>

      {details?.map((item) => (
        <View
          style={{
            borderWidth: 2,
            borderColor: "red",
            backgroundColor: "skyblue",
            marginVertical: 20,
          }}
          key={item._id}
        >
          <Text
            style={{ fontSize: 22, textAlign: "center", fontWeight: "bold" }}
          >
            Name - {item.name}
          </Text>
          <Text
            style={{ fontSize: 22, textAlign: "center", fontWeight: "bold" }}
          >
            Class - {item.classes}
          </Text>

          <Image
            source={{ uri: `${item.img}` }}
            width={300}
            height={200}
            style={{ marginLeft: "auto", marginRight: "auto" }}
            resizeMode="cover"
          />

          {/* <View>
            <WebView
              source={{
                uri: "https://www.google.com/maps/place/Kalyan+Railway+Station/@19.236254,73.1276501,17z/data=!3m1!4b1!4m6!3m5!1s0x3be795d211889993:0x29cf8c3a208b636e!8m2!3d19.236249!4d73.130225!16s%2Fm%2F0hndd99?entry=ttu",
              }}
              injectedJavaScript={injectedJavaScript}
              style={{
                width: 300,
                height: 200,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 5,
              }}
            />
          </View> */}

          <MapView
            style={{
              width: 300,
              height: 200,
              marginLeft: "auto",
              marginRight: "auto",
              marginVertical: 20,
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default ViewDetails;

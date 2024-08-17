import { View, Text } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Entypo } from "react-native-vector-icons";

const Footer = () => {
  return (
    <View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 70,
          width: "100%",
          paddingTop: 5,
          backgroundColor: "#dee2e6",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 35,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Ionicons name="home-sharp" size={25} color="#001219" />
          <Text style={{ marginTop: 3 }}>Home</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Ionicons name="heart-outline" size={25} color="#6c757d" />
          <Text style={{ marginTop: 3 }}>Activities</Text>
        </View>

        <View style={{ marginBottom: 45, alignItems: "center" }}>
          <View
            style={{
              height: 70,
              width: 60,
              backgroundColor: "black",
              transform: [{ rotate: "45deg" }],
              borderRadius: 23,
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <View style={{ bottom: 50 }}>
            <Ionicons name="cart" size={27} color="#fff" />
            <View
              style={{
                backgroundColor: "red",
                borderRadius: 30,
                bottom: 35,
                height: 15,
                width: 15,
                left: 18,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                7
              </Text>
            </View>
          </View>

          <Text style={{ marginTop: -30, color: "black" }}>Cart</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Entypo name="message" size={25} color="#6c757d" />
          <Text style={{ marginTop: 3 }}>Messages</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <AntDesign name="user" size={25} color="#6c757d" />
          <Text style={{ marginTop: 3 }}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;

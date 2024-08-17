import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Offer = () => {
  return (
    <View style={{ marginVertical: 20, paddingHorizontal: 10 }}>
      <View
        style={{
          backgroundColor: "black",
          height: 180,
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        {/* Text */}
        <View style={{ flex: 1, marginLeft: 10, marginTop: 30 }}>
          <Text style={{ color: "#fff", fontSize: 13 }}>
            Get special discount
          </Text>
          <Text style={{ color: "#fff", fontSize: 25, fontWeight: "600" }}>
            upto 60%
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 20,
              height: 35,
              width: 100,
              backgroundColor: "#fff",
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
              Order now
            </Text>
          </TouchableOpacity>
        </View>

        {/* Image */}
        <Image
          source={require("../../assets/burger.png")}
          style={{ resizeMode: "cover", height: 160, width: 160 }}
        />
      </View>

      {/* Horizontal lines */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            height: 2,
            backgroundColor: "#495057",
            width: 30,
            marginHorizontal: 5,
          }}
        />
        <View
          style={{
            height: 2,
            backgroundColor: "#495057",
            width: 5,
            marginHorizontal: 2,
          }}
        />
        <View
          style={{
            height: 2,
            backgroundColor: "#495057",
            width: 5,
            marginHorizontal: 2,
          }}
        />
        <View
          style={{
            height: 2,
            backgroundColor: "#495057",
            width: 5,
            marginHorizontal: 2,
          }}
        />
        <View
          style={{
            height: 2,
            backgroundColor: "#495057",
            width: 5,
            marginHorizontal: 2,
          }}
        />
      </View>
    </View>
  );
};

export default Offer;

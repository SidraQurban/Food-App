import { View, Text } from "react-native";
import React from "react";

const Options = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 5,
        gap: 4,
      }}
    >
      <View
        style={{
          height: 40,
          width: 120,
          backgroundColor: "black",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff" }}>Order again</Text>
      </View>
      <View
        style={{
          height: 40,
          width: 120,
          backgroundColor: "#dee2e6",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "black" }}>Recommended</Text>
      </View>
      <View
        style={{
          height: 40,
          width: 120,
          backgroundColor: "#dee2e6",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "black" }}>Festive menu</Text>
      </View>
    </View>
  );
};

export default Options;

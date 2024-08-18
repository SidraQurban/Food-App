import { View, Text, TouchableOpacity } from "react-native";
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
      <TouchableOpacity
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
      </TouchableOpacity>

      <TouchableOpacity
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
      </TouchableOpacity>

      <TouchableOpacity
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
      </TouchableOpacity>
    </View>
  );
};

export default Options;

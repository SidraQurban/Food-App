import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons, Fontisto } from "react-native-vector-icons";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <View style={{ marginTop: 0 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <EvilIcons name="location" size={30} color="black" />
        </View>

        <View
          style={{
            marginTop: 10,
            marginLeft: 2,
            alignItems: "center",
            marginRight: 175,
          }}
        >
          <Text style={{ fontSize: 13, color: "#6c757d" }}>Delivering To</Text>
          <Text style={{ fontSize: 15, fontWeight: "700" }}>My Home</Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "black",
            height: 35,
            width: 35,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <Fontisto name="bell" size={20} color="#6c757d" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 10,
            height: 35,
            width: 35,
            borderRadius: 20,
            overflow: "hidden",
            marginRight: 50,
          }}
        >
          <Image
            source={require("../../assets/avatar.jpg")}
            style={{ width: 35, height: 35, resizeMode: "cover" }}
          />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </View>
  );
};

export default Header;

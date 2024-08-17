import { View, Text, TextInput } from "react-native";
import React from "react";
import { Fontisto, Feather } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          marginLeft: 8,
          top: 20,
          width: "95%",
          borderWidth: 1,
          padding: 10,
          borderRadius: 15,
          marginBottom: 10,
          borderColor: "#ccc",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#edede9",
        }}
      >
        {/* Search Icon */}
        <View style={{ marginLeft: 10 }}>
          <Fontisto name="search" size={20} color="#8b8c89" />
        </View>

        {/* placeHolder */}
        <View style={{ left: 13, color: "#8b8c89" }}>
          <TextInput
            placeholder="What do you want to eat?"
            onPress={() => navigation.navigate("Search")}
          />
        </View>

        <View
          style={{
            left: 110,
            width: 1,
            height: 28,
            backgroundColor: "#8b8c89",
          }}
        ></View>

        {/* mic icon */}
        <View
          style={{
            left: 120,
          }}
        >
          <Feather name="mic" size={20} color="#8b8c89" />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Ionicons, Feather } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import FoodCard from "../components/FoodCard";

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          flexDirection: "row",
          padding: 10,
        }}
      >
        <Ionicons name="chevron-back" size={20} color="black" />
        <View style={{ marginLeft: 6 }}>
          <Text style={{ fontSize: 17 }}>Back</Text>
        </View>
      </TouchableOpacity>

      <View
        style={{ bottom: 30, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Search</Text>
      </View>

      {/* Search Bar */}
      <View
        style={{
          marginLeft: 20,
          bottom: 20,
          width: "90%",
          borderWidth: 2,
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
          borderColor: "#ced4da",
          flexDirection: "row",
          backgroundColor: "#fff",
        }}
      >
        <Feather name="search" size={24} color="grey" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#212529"
          style={{
            marginLeft: 10,
            fontSize: 18,
          }}
        />
      </View>

      <FoodCard />
      {/* footer */}
      <View style={{ top: 280 }}>
        <Footer />
      </View>
    </View>
  );
};

export default SearchScreen;

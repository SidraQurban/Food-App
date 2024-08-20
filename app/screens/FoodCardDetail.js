import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {
  Ionicons,
  Entypo,
  AntDesign,
  FontAwesome5,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const FoodCardDetail = () => {
  const navigation = useNavigation();
  const [noteCount, setNoteCount] = useState(1);

  const handleIncrement = () => {
    setNoteCount(noteCount + 1);
  };

  const handleDecrement = () => {
    if (noteCount > 0) {
      setNoteCount(noteCount - 1);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../../assets/friedrice.jpg")}
          style={{ resizeMode: "contain", height: 250 }}
        >
          {/* Back */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              marginTop: 10,
              paddingHorizontal: 10,
            }}
          >
            <Ionicons name="chevron-back" size={20} color="black" />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, color: "black" }}>Back</Text>
            </View>
          </TouchableOpacity>

          {/* cancel */}
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <View
              style={{
                position: "absolute",
                top: -13,
                right: 10,
                height: 30,
                width: 30,
                borderRadius: 15,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="cross" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </ImageBackground>

        <View style={{ padding: 10 }}>
          {/* Label */}
          <Text style={{ fontSize: 19, fontWeight: "700" }}>
            Bottega's Fried Rice
          </Text>

          {/* Ingredients */}
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            Orange leaves,chicken, tempeh, sambal, singkong, egg, crackers.
          </Text>
          {/* Price */}
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 15 }}>
              CDF 98
            </Text>
            <View style={{ position: "relative", alignItems: "center" }}>
              <View
                style={{
                  position: "absolute",
                  top: 10,
                  height: 1,
                  width: "100%",
                  backgroundColor: "grey",
                }}
              />
              <Text style={{ color: "grey", fontSize: 15 }}>CDF 170</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              top: 5,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                height: 32,
                width: 110,
                backgroundColor: "#ff4800",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 13 }}>
                Extra discount
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 35,
                width: 35,
                borderRadius: 25,
                backgroundColor: "#dee2e6",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="share" size={20} color="grey" />
            </TouchableOpacity>
          </View>
        </View>

        {/* horizontal line */}
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#adb5bd",
            marginTop: 10,
          }}
        />

        {/* Delivery note */}
        <View style={{ top: 10, marginLeft: 25 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Delivery notes
          </Text>
          <TextInput
            placeholder="e.g.Please leave food at your gate/door"
            style={{
              top: 10,
              marginRight: 20,
              height: 80,
              borderWidth: 1,
              borderColor: "#adb5bd",
              padding: 10,
              textAlignVertical: "top",
            }}
          />
        </View>

        {/* horizontal line */}
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#adb5bd",
            marginTop: 115,
          }}
        />

        {/* subCount */}
        <View style={{ flexDirection: "row", alignItems: "center", top: 2 }}>
          <TouchableOpacity
            style={{
              marginLeft: 30,
              backgroundColor: "#fff",
              borderColor: "grey",
              borderWidth: 1,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              width: 23,
              height: 23,
            }}
            onPress={handleDecrement}
          >
            <AntDesign name="minus" color="grey" size={20} />
          </TouchableOpacity>

          {/* Text */}
          <Text
            style={{
              fontSize: 19,
              marginHorizontal: 10,
              fontWeight: "bold",
            }}
          >
            {noteCount}
          </Text>

          {/* AddCount */}
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderColor: "grey",
              borderWidth: 1,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              width: 23,
              height: 23,
            }}
            onPress={handleIncrement}
          >
            <FontAwesome5 name="plus" size={15} color="black" />
          </TouchableOpacity>
          {/* Add to cart */}
          <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <View
              style={{
                marginLeft: 65,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: 40,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 17 }}>Add to cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FoodCardDetail;

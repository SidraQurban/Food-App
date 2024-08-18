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
      <View>
        <ImageBackground
          source={require("../../assets/friedrice.jpg")}
          style={{ resizeMode: "contain", height: 250 }}
        >
          {/* Back */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              marginTop: 5,
              padding: 10,
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
                marginLeft: 345,
                marginTop: -20,
                height: 25,
                width: 25,
                borderRadius: 20,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="cross" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </ImageBackground>

        <View style={{ top: 10, marginLeft: 10 }}>
          {/* Label */}
          <Text style={{ fontSize: 19, fontWeight: 700 }}>
            Bottega's Fried Rice
          </Text>

          {/* Ingredients */}
          <Text style={{ fontSize: 15, marginTop: 10 }}>
            Orange leaves,chicken, tempeh, sambal, singkong, egg, crackers.
          </Text>
          {/* Price */}
          <View
            style={{
              top: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 5,
              marginRight: 250,
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
          <View style={{ flexDirection: "row", top: 20 }}>
            <View
              style={{
                height: 32,
                width: 110,
                backgroundColor: "#ff4800",
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 5,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 13 }}>
                Extra discount
              </Text>
            </View>
            <TouchableOpacity
              style={{
                left: 190,
                top: 10,
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
            backgroundColor: "#d6ccc2",
            marginTop: 50,
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
              borderColor: "#d6ccc2",
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
            backgroundColor: "#d6ccc2",
            marginTop: 110,
          }}
        />

        {/* subCount */}
        <TouchableOpacity
          style={{
            bottom: -20,
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
            bottom: 5,
            fontSize: 19,
            marginLeft: 68,
            fontWeight: "bold",
          }}
        >
          {noteCount}
        </Text>

        {/* AddCount */}
        <TouchableOpacity
          style={{
            top: -29,
            marginLeft: 95,
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
              bottom: 55,
              marginLeft: 200,
              backgroundColor: "black",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              width: 150,
              height: 40,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 17 }}>Add to cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodCardDetail;

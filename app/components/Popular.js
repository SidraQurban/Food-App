import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Popular = () => {
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
    <View>
      <View style={{ top: 70, marginLeft: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Most popular</Text>
      </View>
      <View
        style={{
          top: 80,
          marginLeft: 15,
        }}
      >
        <View
          style={{
            height: 150,
            width: 370,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Image
              source={require("../../assets/friedrice.jpg")}
              style={{
                resizeMode: "contain",
                height: 110,
                width: 165,
              }}
            />

            {/* Discount text */}
            <Text
              style={{
                bottom: 34,
                color: "#fff",
                backgroundColor: "#ff4800",
                height: 20,
                marginLeft: 15,
                width: 85,
                textAlign: "center",
                borderRadius: 10,
                fontSize: 12,
              }}
            >
              Extra discount
            </Text>
            {/* Label */}
            <Text
              style={{
                fontSize: 15,
                bottom: 15,
                textAlign: "center",
                color: "black",
                fontWeight: "700",
              }}
            >
              Bottegea's Fried Rice
            </Text>

            {/* price */}
            <View
              style={{
                bottom: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 23,
                marginRight: 23,
              }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 14 }}
              >
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
                <Text style={{ color: "grey" }}>CDF 120</Text>
              </View>
            </View>

            {/* Add */}
            <View style={{ alignItems: "center", marginBottom: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("FoodCardDetail")}
                style={{
                  borderColor: "black",
                  borderWidth: 2,
                  height: 40,
                  width: 150,
                  borderRadius: 20,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Add
                </Text>
              </TouchableOpacity>
              {/* More border */}

              <View
                style={{
                  marginBottom: 19,
                  width: 150,
                  height: 17,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  backgroundColor: "#f8f9fa",
                  borderColor: "#ddd",
                }}
              />
            </View>
          </View>

          {/* 2nd componnet */}
          <View style={{ right: 2 }}>
            <Image
              source={require("../../assets/salmon.jpg")}
              style={{
                bottom: 75,
                resizeMode: "contain",
                height: 260,
                width: 170,
              }}
            />
            <Text
              style={{
                fontSize: 15,
                bottom: 145,
                textAlign: "center",
                color: "black",
                fontWeight: "700",
              }}
            >
              Salmon with Beaurr..
            </Text>
            {/* Price */}
            <Text
              style={{
                fontSize: 14,
                bottom: 140,
                color: "black",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              CDF 320
            </Text>
            {/* Note text */}
            <View
              style={{
                marginLeft: 10,
                bottom: 123,
                borderColor: "grey",
                borderWidth: 2,
                height: 27,
                width: 50,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 13,
                  fontWeight: "bold",
                }}
              >
                Note
              </Text>
            </View>

            {/* subCount */}
            <TouchableOpacity
              style={{
                bottom: 150,
                marginLeft: 80,
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
              <AntDesign name="minus" color="red" size={20} />
            </TouchableOpacity>
            {/* Counter */}
            <Text
              style={{
                bottom: 174,
                fontSize: 19,
                marginLeft: 110,
              }}
            >
              {noteCount}
            </Text>

            {/* AddCount */}
            <TouchableOpacity
              style={{
                bottom: 199,
                marginLeft: 130,
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
              <Ionicons name="add" size={20} color="red" />
            </TouchableOpacity>
            {/* Extra border */}
            <View
              style={{
                bottom: 199,
                marginLeft: 10,
                marginBottom: 60,
                width: 170,
                height: 17,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: "#f8f9fa",
                borderColor: "#ddd",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Popular;

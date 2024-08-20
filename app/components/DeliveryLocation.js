import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import Payment from "./Payment";
import Footer from "./Footer";

const DeliveryLocation = () => {
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
      <View
        style={{
          marginLeft: 0,
          height: 460,
          top: 15,
          backgroundColor: "white",
        }}
      >
        <View>
          {/* Text */}
          <Text
            style={{
              marginLeft: 15,
              top: 15,
              fontSize: 19,
              fontWeight: "bold",
            }}
          >
            Delivery location
          </Text>
          {/* horizontal line */}
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#d6ccc2",
              marginTop: 30,
            }}
          />
          {/* location */}
          <View
            style={{
              marginLeft: 11,
              width: 370,
              top: 20,
              marginRight: 15,

              height: 70,
              borderWidth: 1,
              borderColor: "#d6ccc2",
              backgroundColor: "#e9ecef",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              4.6km distance
            </Text>
            <TouchableOpacity style={{ marginLeft: 125 }}>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                Change location
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 20, bottom: 15 }}>
            <Text style={{ fontSize: 13 }}>
              Est delivery fee 12rb ☆ Delivery in 15 min
            </Text>
          </View>
          {/* Editable */}
          <View
            style={{
              flexDirection: "row",
              top: 20,
              marginLeft: 10,
            }}
          >
            <View
              style={{
                height: 31,
                width: 140,
                backgroundColor: "#fff",
                borderColor: "#e6e8e6",
                borderWidth: 1,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 14, color: "black" }}>
                Edit address details
              </Text>
            </View>
            <TouchableOpacity
              style={{
                marginLeft: 15,
                height: 31,
                width: 90,
                backgroundColor: "#fff",
                borderColor: "#e6e8e6",
                borderWidth: 1,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 14, color: "black" }}>Add note</Text>
            </TouchableOpacity>
          </View>
          {/* xyz address */}
          <TouchableOpacity
            style={{
              marginLeft: 11,
              width: 370,
              top: 30,
              marginRight: 15,
              height: 60,
              borderWidth: 1,
              borderColor: "#d6ccc2",
              backgroundColor: "#e9ecef",
              flexDirection: "row",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 15 }}>XYZ</Text>
          </TouchableOpacity>

          {/* Item */}
          <Text
            style={{
              marginTop: 50,
              marginLeft: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Item
          </Text>
          {/* horizontal line */}
          <View
            style={{
              marginTop: 10,
              height: 1,
              width: "100%",
              backgroundColor: "#d6ccc2",
            }}
          />

          {/* Detail */}
          <View>
            {/* Header Section */}
            <View
              style={{
                bottom: 50,
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <View style={{ top: 50 }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  Bottegea's Fried Rice
                </Text>
              </View>
              {/* Img tags */}
              <View style={{ bottom: 10 }}>
                <Image
                  source={require("../../assets/friedrice.jpg")}
                  style={{
                    width: 90,
                    height: 200,
                    resizeMode: "contain",
                  }}
                />
              </View>
            </View>

            {/* Price Section */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 10,
                bottom: 180,
                marginLeft: 10,
                marginRight: 250,
              }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 14 }}
              >
                CDF 129
              </Text>
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    position: "absolute",
                    top: 10,
                    height: 1,
                    width: "100%",
                    backgroundColor: "grey",
                  }}
                />
                <Text style={{ color: "grey" }}>CDF 170</Text>
              </View>
            </View>

            {/* Quantity Section */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 10,
                marginTop: 20,
              }}
            >
              {/* sub Button */}
              <TouchableOpacity
                style={{
                  bottom: 190,
                  backgroundColor: "#fff",
                  borderColor: "grey",
                  borderWidth: 1,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 25,
                  height: 25,
                }}
                onPress={handleDecrement}
              >
                <AntDesign name="minus" color="black" size={20} />
              </TouchableOpacity>

              {/* Quantity Text */}
              <Text
                style={{
                  bottom: 190,
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 19,
                  marginHorizontal: 20,
                  fontSize: 19,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                {noteCount}
              </Text>

              {/* add Button */}
              <TouchableOpacity
                style={{
                  bottom: 190,
                  marginLeft: -10,
                  backgroundColor: "#fff",
                  borderColor: "grey",
                  borderWidth: 1,
                  backgroundColor: "#fff",
                  borderColor: "grey",
                  borderWidth: 1,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 25,
                  height: 25,
                }}
                onPress={handleIncrement}
              >
                <Ionicons name="add" size={20} color="black" />
              </TouchableOpacity>
            </View>

            {/* Note Button */}
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                // marginRight: 240,
                bottom: 215,
                borderColor: "#eaeaea",
                borderWidth: 2,
                height: 27,
                width: 50,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "black", fontSize: 13, fontWeight: "bold" }}
              >
                Note
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* horizontal line */}
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#d6ccc2",
            bottom: 195,
          }}
        />
      </View>
      {/* Promo */}
      <View
        style={{
          marginLeft: 11,
          width: 370,
          top: 30,
          marginRight: 15,
          height: 50,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "#d6ccc2",
          backgroundColor: "#e9ecef",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 15, color: "grey" }}>Enter Promo Code</Text>
        <TouchableOpacity style={{ marginLeft: 200 }}>
          <Ionicons name="copy-outline" size={20} />
        </TouchableOpacity>
      </View>
      <Payment />
      <Footer />
    </View>
  );
};

export default DeliveryLocation;

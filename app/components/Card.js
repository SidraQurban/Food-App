import { View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          marginLeft: 10,
          backgroundColor: "black",
          height: 180,
          width: "95%",
          borderRadius: 20,
        }}
      >
        <Image
          source={require("../../assets/deal.png")}
          style={{ resizeMode: "cover", height: 180, width: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Card;

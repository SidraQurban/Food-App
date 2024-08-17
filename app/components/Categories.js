import { View, Text, Image } from "react-native";
import React from "react";
import { categoryData1, categoryData2 } from "../Constant";

const Categories = () => {
  return (
    <View style={{ marginTop: 10 }}>
      {/* 1st row */}
      <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 5 }}>
        {categoryData1.map(({ img, label }, index) => (
          <View
            key={index}
            style={{ alignItems: "center", marginHorizontal: 10 }}
          >
            <View
              style={{
                height: 70,
                width: 70,
                backgroundColor: "#dee2e6",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={img}
                style={{ resizeMode: "cover", height: 70, width: 70 }}
              />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "600",
                color: "black",
                textAlign: "center",
              }}
            >
              {label}
            </Text>
          </View>
        ))}
      </View>

      {/* 2nd row */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          marginLeft: -1,
        }}
      >
        {categoryData2.map(({ img, label }, index) => (
          <View
            key={index}
            style={{ alignItems: "center", marginHorizontal: 10 }}
          >
            <View
              style={{
                height: 70,
                width: 70,
                backgroundColor: "#dee2e6",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={img}
                style={{ resizeMode: "cover", height: 70, width: 70 }}
              />
            </View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: "600",
                color: "black",
                textAlign: "center",
              }}
            >
              {label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Categories;

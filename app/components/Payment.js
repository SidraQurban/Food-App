import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          flex: 1,
          height: 600,
        }}
      >
        <View
          style={{
            marginLeft: 0,
            height: 240,
            top: 45,
            backgroundColor: "white",
          }}
        >
          <View style={{ top: 10, marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Payment summary
            </Text>
          </View>

          {/* horizontal line */}
          <View
            style={{
              marginTop: 20,
              height: 1,
              width: "100%",
              backgroundColor: "#d6ccc2",
            }}
          />
          {/* price */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 10,
                top: 15,
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Price
            </Text>
            {/* Price Section */}
            <View
              style={{
                top: 15,
                marginLeft: 186,
                marginRight: 40,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 10,
                  height: 1,
                  width: "100%",
                  backgroundColor: "grey",
                }}
              />
              <Text style={{ color: "grey" }}>CDF 129</Text>
            </View>
            <Text
              style={{
                top: 15,
                color: "black",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              CDF 170
            </Text>
          </View>

          {/* horizontal line */}
          <View
            style={{
              marginLeft: 10,
              marginTop: 30,
              height: 1,
              width: "95%",
              backgroundColor: "#d6ccc2",
            }}
          />

          {/* Delivery fee */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 10,
                top: 15,
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Delivery Fee
            </Text>
            {/* Price Section */}
            <View
              style={{
                top: 15,
                marginLeft: 167,
                marginRight: 40,
              }}
            >
              <View
                style={{
                  position: "absolute",
                  top: 10,
                  height: 1,
                  width: "100%",
                  backgroundColor: "grey",
                }}
              />
              <Text style={{ color: "grey" }}>CDF 20</Text>
            </View>
            <Text
              style={{
                top: 15,
                color: "black",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Free
            </Text>
          </View>

          {/* horizontal line */}
          <View
            style={{
              marginLeft: 10,
              marginTop: 30,
              height: 1,
              width: "95%",
              backgroundColor: "#d6ccc2",
            }}
          />

          {/* Total Amount */}
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                marginLeft: 10,
                top: 15,
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              Total Payment
            </Text>

            {/* Price Section */}
            <View
              style={{
                top: 15,
                marginLeft: 167,
                marginRight: 55,
              }}
            ></View>

            <Text
              style={{
                top: 15,
                color: "black",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              CDF 129
            </Text>
          </View>

          {/* horizontal line */}
          <View
            style={{
              marginLeft: 10,
              marginTop: 30,
              height: 1,
              width: "95%",
              backgroundColor: "#d6ccc2",
            }}
          />
          <TouchableOpacity style={{ top: 10, marginLeft: 10 }}>
            <Text style={{ fontSize: 15, color: "red", fontWeight: "700" }}>
              View details
            </Text>
          </TouchableOpacity>
        </View>
        {/* Now button */}
        <View style={{ top: 55, marginLeft: 10 }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>When</Text>
          <View style={{ flexDirection: "row", top: 5 }}>
            <TouchableOpacity
              style={{
                marginLeft: 5,
                height: 35,
                width: 60,
                borderRadius: 10,
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 15 }}>Now</Text>
            </TouchableOpacity>
            {/* Schedule btn */}
            <TouchableOpacity
              style={{
                marginLeft: 15,
                height: 35,
                width: 80,
                borderRadius: 10,
                backgroundColor: "grey",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 15 }}>Schedule</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* horizontal line */}
        <View
          style={{
            width: "100%",
            marginTop: 75,
            height: 2,
            backgroundColor: "#d6ccc2",
          }}
        />
        <TouchableOpacity
          style={{
            marginLeft: 11,
            width: 370,
            top: 10,
            marginRight: 15,
            height: 50,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: "#d6ccc2",
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 15 }}>Confirm $129.00</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

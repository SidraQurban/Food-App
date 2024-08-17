import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import DeliveryLocation from "../components/DeliveryLocation";

const OrderDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ paddingVertical: 10, backgroundColor: "#fff" }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Order Details
          </Text>
          {/* Back */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            <Ionicons name="chevron-back" size={20} color="black" />
            <Text style={{ fontSize: 17, color: "black", marginLeft: 5 }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>

        <DeliveryLocation />
      </ScrollView>
    </View>
  );
};

export default OrderDetails;

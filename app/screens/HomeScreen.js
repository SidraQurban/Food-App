import { SafeAreaView, Text, ScrollView, StatusBar } from "react-native";
import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Offer from "../components/Offer";
import Options from "../components/Options";
import Footer from "../components/Footer";
import Card from "../components/Card";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <Header />
        <Categories />
        <Offer />
        <Options />
        <Card />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

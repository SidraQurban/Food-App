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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
        <Header />
        <Categories />
        <Offer />
        <Options />
        <Card />
        <Footer />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;

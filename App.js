import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "./src/Home/Container";

export default function App() {
  return (
    <View>

    <ScrollView>
      <Container />
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

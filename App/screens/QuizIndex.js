import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import { RowItem } from "../components/RowItem";

import spaceQuestions from "../data/space";
import westernQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="dark-content" />
    <ScrollView style={{ flex: 1 }}>
      <RowItem
        name="Білет №1"
        color="#373737"
        onPress={() =>
          navigation.navigate("Quiz", {
            color: "#424242",
            questions: spaceQuestions,
            title: "Білет №1"
          })
        }
      />
      <RowItem
        name="Білет №2"
        color="#494949"
        onPress={() =>
          navigation.navigate("Quiz", {
            color: "#424242",
            questions: westernQuestions,
            title: "Білет №2"
          })
        }
      />
      <RowItem
        name="Білет №3"
        color="#757575"
        onPress={() =>
          navigation.navigate("Quiz", {
            color: "#424242",
            questions: computerQuestions,
            title: "Білет №3"
          })
        }
      />
    </ScrollView>
  </View>
);

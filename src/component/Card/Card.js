import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
// import BouncyCheckbox from "react-native-bouncy-checkbox"
// import CheckBox from "expo-checkbox";
import CheckBox from "@react-native-community/checkbox";

const Card = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <>
      <View style={styles.cardWrapper}>
        <Text>Card</Text>
        {/* <BouncyCheckbox
        value={isSelected}
    
        /> */}
        <CheckBox value={isSelected} onValueChange={setSelection} />
        {isSelected ? (
          <Text style={styles.afterCheck}>Makan ikan bawal</Text>
        ) : (
          <Text>Makan ikan bawal</Text>
        )}
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardWrapper: {},
  Title: {
    fontWeight: "bold",
    fontSize: 34,
  },
  afterCheck: {
    textDecorationLine: "line-through",
  },
});

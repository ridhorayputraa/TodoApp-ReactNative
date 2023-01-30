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
        <CheckBox
        
          style={styles.check}
          value={isSelected}
          onValueChange={setSelection}
        />
        {isSelected ? (
          <View style={styles.content}>
            <>
              <Text style={styles.afterCheck}>Makan ikan bawal</Text>
              <Text style={styles.afterCheck}>Makan ikan bawal</Text>
            </>
          </View>
        ) : (
          <View style={styles.content}>
            <Text>Makan ikan bawal</Text>
            <Text>Makan ikan bawal</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  content: {
    marginTop: 1.2,
    marginLeft: 2,
    flexDirection: "column",
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    textAlign: "left",
    justifyContent: "flex-start",
  },
  Title: {
    fontWeight: "bold",
    fontSize: 34,
  },
  afterCheck: {
    textDecorationLine: "line-through",
  },
});

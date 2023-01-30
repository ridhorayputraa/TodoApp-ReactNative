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
              <Text style={styles.afterCheckHead}>Makan ikan bawal</Text>
              <Text style={styles.afterCheckSub}>Makan ikan bawal</Text>
            </>
          </View>
        ) : (
          <View style={styles.content}>
            <Text>Makan ikan bawal</Text>
            <Text style={styles.sub}>Makan ikan bawal</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  afterCheckHead: {
    fontWeight: "bold",
    fontSize:18,
    textDecorationLine: "line-through",
  },
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
  
  sub:{
    fontSize:13,
    opacity:0.8,
  },
  afterCheckSub: {
    fontSize:13,
    opacity:0.8,
    textDecorationLine: "line-through",
  },
});

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
        {/* <View style={styles.container}> */}
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
              <Text style={styles.head}>
                Makan ikan bawal di knatin terdekatttttttttt
              </Text>
              <Text style={styles.sub}>Makan ikan bawal</Text>
            </View>
          )}
        {/* </View> */}
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
  },
  head: {
    fontWeight: "bold",
    fontSize: 17,
  },
  afterCheckHead: {
    fontWeight: "bold",
    fontSize: 17,
    textDecorationLine: "line-through",
  },
  content: {
    marginTop: 1.2,
    marginLeft: 5,
    flexDirection: "column",
  },
  cardWrapper: {
    borderWidth: 1.5,
    borderColor:'#f1f1f1',
    padding: 20,
    
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

  sub: {
    fontSize: 12,
    opacity: 0.8,
  },
  afterCheckSub: {
    fontSize: 12,
    opacity: 0.8,
    textDecorationLine: "line-through",
  },
});

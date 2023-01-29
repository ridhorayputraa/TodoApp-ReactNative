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
        <CheckBox style={styles.check} value={isSelected} onValueChange={setSelection} />
        {isSelected ? (
          <Text style={styles.afterCheck}>Makan ikan bawal</Text>
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
  check:{
marginBottom:10
  },
  content: { 
    flexDirection:'column'
   },
  cardWrapper: {display:'flex',
flexDirection:'row',
alignItems:'flex-start',
textAlign:"left",
justifyContent:'flex-start'
},
  Title: {
    fontWeight: "bold",
    fontSize: 34,
  },
  afterCheck: {
    marginTop:2,

    textDecorationLine: "line-through",
  },
});

import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Card from "../component/Card/Card";

export default function Container() {
  const [nameTodo, setNameTodo] = useState("");
  const [descTodo, setDescTodo] = useState("");


  function submit(){
    data = {
        nameTodo,
        descTodo
    }

    console.log("Inpput Data: ",data)
    
  }

  return (
    <View>
      <View style={styles.wrapper}>
        <Text>Type Your Tasks Here</Text>
        <Text style={styles.Title}>TASKS 3</Text>
        <Card />
      </View>
      {/* Form Wrapper */}
      <View>
        <View style={styles.input}>
          <TextInput value={nameTodo} onChangeText={(value) => setNameTodo(value) } style={styles.name} placeholder="Task name here...." />
          <TextInput value={descTodo} onChangeText={(value) => setDescTodo(value) } style={styles.desc} placeholder="Description" />
        </View>
        <Button onPress={submit} title="Add Task" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 100,
    // borderHeight:0,
    marginBottom: 2,
    borderRadius: 20,
    // borderWidth: 1,
    padding: 10,
  },
  name: {
    fontSize: 17,
  },
  desc: {
    fontSize: 15,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 34,
  },
  wrapper: {
    padding: 20,
  },
});
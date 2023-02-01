import { StyleSheet, Alert, Button, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../component/Card/Card";
import axios from "axios";

export default function Container() {
  const [nameTodo, setNameTodo] = useState("");
  const [descTodo, setDescTodo] = useState("");
  const [task, setTask] = useState([]);
const [numTask, setNumTask] = useState(0);
  useEffect(() => {
    get();
  }, []);

  function submit() {
    data = {
      nameTodo,
      descTodo,
    };

    if (data.nameTodo != "" || data.descTodo != "") {
      axios.post("http://192.168.0.2:3000/todo", data).then((res) => {
        console.log("Input di terima: ", res);
        setDescTodo("");
        setNameTodo("");
        Alert.alert("Congralute", "Your adding new task");
        get();
      });
    } else {
      Alert.alert("Failed", "Please fill the text");
    }
  }

  function get() {
    data = {
      nameTodo,
      descTodo,
    };

    axios.get("http://192.168.0.2:3000/todo").then((res) => {
      setTask(res.data);
      let data = res.data
      // logic biar jadi 0
      for(let i = 0; i < data.length ; i++){
        if(data == 0       ){
          setNumTask(0)
        }
        let data = i + 1
        setNumTask(data)
      }
    });
  }

  function deleteData(data){
    console.log(data)
      axios.delete(`http://192.168.0.2:3000/todo/${data}`)
      .then(res => {
        console.log("haloo gue di click: ", res.data)
        get()
        Alert.alert('Deleted!', 'Data has been deleted')
      })
  }

  return (
    <View>
      <View style={styles.wrapper}>
        <Text>Type Your Tasks Here</Text>
        <Text style={styles.Title}>TASKS {numTask}</Text>
      </View>
      {task.map((data) => {
        return <Card key={data.id} deleteData={() => deleteData(data.id)} name={data.nameTodo} desc={data.descTodo}/>;
      })}
  

      {/* Form Wrapper */}
      <View>
        <View style={styles.input}>
          <TextInput
            value={nameTodo}
            onChangeText={(value) => setNameTodo(value)}
            style={styles.name}
            placeholder="Task name here...."
          />
          <TextInput
            value={descTodo}
            onChangeText={(value) => setDescTodo(value)}
            style={styles.desc}
            placeholder="Description"
          />
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
    padding: 15,
  },
});

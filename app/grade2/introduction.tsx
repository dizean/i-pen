import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput, StyleSheet } from "react-native";
import { useUser } from "@/context/UserContext";

export default function PreTest() {
  const { setUser } = useUser();
  const [nameInput, setNameInput] = useState("");

  const handleSetUsername = () => {
    if (nameInput.trim() === "") {
      Alert.alert("Error", "Please enter your name.");
      return;
    }
    setUser(nameInput.trim());
    Alert.alert("Success", `Welcome, ${nameInput.trim()}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Before we get started</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Name First:</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your name"
          value={nameInput}
          onChangeText={(text) => setNameInput(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSetUsername}>
          <Text style={styles.buttonText}>Set Username</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

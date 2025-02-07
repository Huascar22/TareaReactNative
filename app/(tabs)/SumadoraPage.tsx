"use client"

import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

const SumadoraPage = () => {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState(0)

  const sumar = () => {
    const suma = Number.parseFloat(num1) + Number.parseFloat(num2)
    setResult(suma)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNum1}
        value={num1}
        keyboardType="numeric"
        placeholder="Ingrese el primer número"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNum2}
        value={num2}
        keyboardType="numeric"
        placeholder="Ingrese el segundo número"
      />
      <Button title="Sumar" onPress={sumar} />
      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
})

export default SumadoraPage


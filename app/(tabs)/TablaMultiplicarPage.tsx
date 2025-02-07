"use client"

import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native"

const TablaMultiplicarPage = () => {
  const [numero, setNumero] = useState("")
  const [tabla, setTabla] = useState<string[]>([])

  const generarTabla = () => {
    const num = Number.parseInt(numero)
    if (num > 0) {
      const nuevaTabla = []
      for (let i = 1; i <= 13; i++) {
        nuevaTabla.push(`${num} x ${i} = ${num * i}`)
      }
      setTabla(nuevaTabla)
    } else {
      setTabla(["Por favor, ingrese un número válido"])
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNumero}
        value={numero}
        keyboardType="numeric"
        placeholder="Ingrese un número"
      />
      <Button title="Generar Tabla" onPress={generarTabla} />
      <ScrollView style={styles.scrollView}>
        {tabla.map((item, index) => (
          <Text key={index} style={styles.item}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  scrollView: {
    marginTop: 20,
    width: "100%",
  },
  item: {
    fontSize: 18,
    marginBottom: 5,
  },
})

export default TablaMultiplicarPage


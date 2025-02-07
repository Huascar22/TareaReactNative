"use client"

import { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

const TraductorPage = () => {
  const [numero, setNumero] = useState("")
  const [resultado, setResultado] = useState("")

  const traducirNumero = (num: number): string => {
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
    const decenas = ["diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"]
    const especiales = [
      "once",
      "doce",
      "trece",
      "catorce",
      "quince",
      "dieciséis",
      "diecisiete",
      "dieciocho",
      "diecinueve",
    ]

    if (num === 0) return "cero"
    if (num === 1000) return "mil"

    let resultado = ""

    if (num >= 100) {
      const centenas = Math.floor(num / 100)
      num %= 100
      if (centenas === 1) {
        resultado += num === 0 ? "cien" : "ciento "
      } else {
        resultado += unidades[centenas] + "cientos "
      }
    }

    if (num >= 20) {
      const decena = Math.floor(num / 10)
      resultado += decenas[decena - 1]
      num %= 10
      if (num > 0) resultado += " y "
    }

    if (num >= 10) {
      resultado += especiales[num - 10]
    } else if (num > 0) {
      resultado += unidades[num]
    }

    return resultado.trim()
  }

  const traducir = () => {
    const num = Number.parseInt(numero)
    if (num >= 1 && num <= 1000) {
      setResultado(traducirNumero(num))
    } else {
      setResultado("Por favor, ingrese un número entre 1 y 1000")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNumero}
        value={numero}
        keyboardType="numeric"
        placeholder="Ingrese un número del 1 al 1000"
      />
      <Button title="Traducir" onPress={traducir} />
      <Text style={styles.result}>{resultado}</Text>
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
    textAlign: "center",
  },
})

export default TraductorPage


import { View, Text, Image, StyleSheet, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack";

// Añadir tipos a la navegación con TypeScript
type RootStackParamList = {
  Sumadora: undefined;
  Traductor: undefined;
  TablaMultiplicar: undefined;
  Experiencia: undefined;
}

const HomePage = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/huascarFooto.jpg")} style={styles.photo} />
      <Text style={styles.text}>Nombre: Huascar Espinal</Text>
      <Text style={styles.text}>Matricula: 2023-0664</Text>
      <Text style={styles.text}>Correo: espinalhuascar@gmail.com</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sumadora" onPress={() => navigation.navigate("Sumadora")} />
        <Button title="Traductor" onPress={() => navigation.navigate("Traductor")} />
        <Button title="Tabla de Multiplicar" onPress={() => navigation.navigate("TablaMultiplicar")} />
        <Button title="Experiencia Personal" onPress={() => navigation.navigate("Experiencia")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
})

export default HomePage

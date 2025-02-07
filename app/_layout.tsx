import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomePage from "./(tabs)/index"
import SumadoraPage from "./(tabs)/SumadoraPage"
import TraductorPage from "./(tabs)/TraductorPage"
import TablaMultiplicarPage from "./(tabs)/TablaMultiplicarPage"
import ExperienciaPage from "./(tabs)/ExperienciaPage"

const Stack = createStackNavigator()

const App = () => {
  return (

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: "Página Inicial" }} />
        <Stack.Screen name="Sumadora" component={SumadoraPage} />
        <Stack.Screen name="Traductor" component={TraductorPage} />
        <Stack.Screen
          name="TablaMultiplicar"
          component={TablaMultiplicarPage}
          options={{ title: "Tabla de Multiplicar" }}
        />
        <Stack.Screen name="Experiencia" component={ExperienciaPage} options={{ title: "Experiencia Personal" }} />
      </Stack.Navigator>

  )
}

export default App


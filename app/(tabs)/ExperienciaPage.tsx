import { View, StyleSheet } from "react-native"
import { WebView } from "react-native-webview"

const ExperienciaPage = () => {
  const videoId = "dInFDae53os" 

  return (
    <View style={styles.container}>
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        source={{
          uri: `https://www.youtube.com/embed/${videoId}`,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
})

export default ExperienciaPage


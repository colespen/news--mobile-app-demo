import { View, Text } from "react-native";
import styles from "./styles";


export default function Loading() {

  return (
    <View style={styles.view}>
      <Text style={{fontStyle: "italic"}}>
        loading ....
      </Text>
    </View>
  );
}
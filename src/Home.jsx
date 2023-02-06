import { View, Text, FlatList, Image, Button, Linking } from "react-native";
import viewStyles from "./styles";
import styles from "../styles";


export default function Home({ data }) {

  const Item = ({ data }) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.itemImage} source={{ uri: data.urlToImage }} />
        <Text style={styles.itemTitle}>
          {data.title}
        </Text>
        <Text style={styles.itemDescription}>
          {data.description}
        </Text>
        <View style={styles.itemBtn}>
          <Button onPress={() => readFullArticle(data.url)} title="Read" />
        </View>
      </View>
    );
  };

  const readFullArticle = (url) => {
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };



  return (
    <View style={styles.container}>
    <Text style={viewStyles.header}>
      {/* Top Stories */}
    </Text>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({ item }) => <Item data={item} />}
      />
    </View>
  );
}
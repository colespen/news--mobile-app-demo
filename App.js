import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import Home from './src/Home';
import Loading from './src/Loading';
import styles from './styles';


export default function App() {
  const [fetchingData, setFetchingData] = useState(true);
  const [items, setItems] = useState([]);

  // const key1 = `3206006dc7de451996afec6afe3ffaa3`;
  const key2 = `2ea3e0036ccf431ea7fac546d6a8d6ac`;
  const APIurl = `https://newsapi.org/v2/top-headlines?q=music&apiKey=${key2}`;


  useEffect(() => {
    fetch(APIurl)
      .then(response =>
        response.json())
      .then(data => {
        // console.log(data)
        return data.articles;
      })
      .then(articles => {
        setItems(articles);
        setFetchingData(false);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        fetchingData ?
          <Loading /> :
          <Home data={items} />
      }
    </View>
  );
}
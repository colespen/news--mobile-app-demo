import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    borderWidth: 0,
    width: '100%',
    padding: 5
  },
  itemImage: {
    // draft: yes,
    height: 200,
  },
  itemTitle: {
    textAlign: "center",
    padding: 20,
    fontSize: 17,
    color: 'black',
    backgroundColor: 'white',

  },
  itemDescription: {
    fontSize: 17,
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
  },
  itemBtn: {
    flexDirection: 'row',
    backgroundColor: 'white',
  }
});
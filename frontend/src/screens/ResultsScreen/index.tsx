import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import ProductCollapsed from "../../components/ProductCollapsed";

const ResultsScreen = () => {
  const products = [
    {
      id: 1,
      url: "https://bit.ly/3pRl4vD",
      title: "Relaxed Fit Felted Overshirt",
      price: 2699,
    },
    {
      id: 2,
      url: "https://bit.ly/3G1Feck",
      title: "Relaxed Fit Teddy Jacket",
      price: 1499,
    },
    {
      id: 3,
      url: "https://bit.ly/3HB1JVS",
      title: "Relaxed Fit Hoodie",
      price: 1999,
    },
    {
      id: 4,
      url: "https://bit.ly/3qRwqzn",
      title: "Regular Fit Hoodie",
      price: 2299,
    },
    {
      id: 5,
      url: "https://bit.ly/3JAa3qF",
      title: "Wool-blend Jacket",
      price: 4499,
    },
    {
      id: 6,
      url: "https://bit.ly/3qLVCHs",
      title: "Regular Fit Hoodie",
      price: 2299,
    },
    {
      id: 7,
      url: "https://bit.ly/3sT1bGJ",
      title: "Padded Parka",
      price: 5999,
    },
    {
      id: 8,
      url: "https://bit.ly/3FWwcgD",
      title: "Twill Overshirt",
      price: 2299,
    },
    {
      id: 9,
      url: "https://bit.ly/3zniuki",
      title: "Waterproof Cargo Jacket",
      price: 5999,
    },
    {
      id: 10,
      url: "https://bit.ly/3JG9tYn",
      title: "Relaxed Fit Teddy Zip-Through Hoodie",
      price: 4499,
    },
  ];
  return (
    <ScrollView>
      <View style={styles.root}>
        {products.map((product) => {
          return <ProductCollapsed product={product} key={product.id} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export default ResultsScreen;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProductCollapsed = (props: any) => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: props.product.url,
        }}
      />
      <View>
        <Text style={styles.title}>{props.product.title}</Text>
        <Text style={styles.price}>Rs. {props.product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    maxWidth: 140,
  },
  image: {
    height: 210,
    width: 140,
    borderRadius: 18,
    marginBottom: 5,
  },
  title: {
    marginTop: 5,
    marginBottom: 5,
  },
  price: {
    fontWeight: "600",
  },
});

export default ProductCollapsed;

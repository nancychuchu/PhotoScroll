import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import styles from "./styles";

const Photo = ({ title, url }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.shadow}>
        <Image
          style={styles.image}
          source={{ uri: url, cache: "only-if-cached" }}
        />
      </View>
    </View>
  );
};

export default Photo;

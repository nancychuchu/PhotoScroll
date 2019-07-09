import React from "react";
import { ScrollView, Text, Image, View } from "react-native";
import styles from "./styles";

const Photo = ({ title, url }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: url }} />
    </View>
  );
};

export default Photo;

import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const Main = ({ dataSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Photo Reel </Text>
      <PhotoScroll dataSource={dataSource} />
    </View>
  );
};

export default Main;

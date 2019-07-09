import React from "react";
import { Text, View } from "react-native";
import PhotoScroll from "../../components/PhotoScroll";
import styles from "./styles";

const Main = ({ dataSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Nancy's photo reel </Text>
      <PhotoScroll dataSource={dataSource} />
    </View>
  );
};

export default Main;

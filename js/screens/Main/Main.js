import React from "react";
import { Text, View } from "react-native";
import PhotoScroll from "../../components/PhotoScroll";
import styles from "./styles";
import PropTypes from "prop-types";

const Main = ({ dataSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Photo Reel </Text>
      <PhotoScroll dataSource={dataSource} />
    </View>
  );
};

Main.propTypes = {
  dataSource: PropTypes.array.isRequired
};

export default Main;

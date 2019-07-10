import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const Photo = ({ title, url }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.shadow}>
        <Image style={styles.image} source={{ uri: url }} />
      </View>
    </View>
  );
};

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Photo;

import React, { Component } from "react";

import { ActivityIndicator, View } from "react-native";

import styles from "./styles";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loader} size="large" color="#d5dbdb" />
    </View>
  );
};

export default Loader;

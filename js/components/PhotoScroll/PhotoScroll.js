import React, { Component } from "react";
import { View, FlatList } from "react-native";
import Photo from "../Photo";
import styles from "./styles";
import PropTypes from "prop-types";

const PhotoScroll = ({ dataSource }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={dataSource}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Photo title={item.title} key={item.id} url={item.url} />
        )}
      />
    </View>
  );
};

PhotoScroll.propTypes = {
  dataSource: PropTypes.array.isRequired
};

export default PhotoScroll;

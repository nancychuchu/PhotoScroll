import React, { Component } from "react";
import { Text, View, FlatList, List } from "react-native";
import Photo from "../Photo";
import styles from "./styles";
const PhotoScroll = ({ dataSource }) => {
  return (
    <View style={styles.container}>
      <FlatList
        // contentContainerStyle={styles.container}
        horizontal={true}
        // automaticallyAdjustContentInsets={false}
        data={dataSource}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Photo title={item.title} key={item.id} url={item.url} />
        )}
      />
    </View>
  );
};

export default PhotoScroll;

import React, { Component } from "react";
import { Text, View, FlatList, List } from "react-native";
import Photo from "../Photo";

const PhotoScroll = ({ dataSource }) => {
  return (
    <FlatList
      horizontal={true}
      data={dataSource}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Photo title={item.title} url={item.url} />}
    />
  );
};

export default PhotoScroll;

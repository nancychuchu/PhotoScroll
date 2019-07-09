import React, { Component } from "react";
import { Text, View, FlatList, List } from "react-native";
import Photo from "../Photo";

const PhotoScroll = ({ dataSource }) => {
  return (
    <FlatList
      data={dataSource}
      renderItem={({ item }) => <Photo title={item.title} url={item.url} />}
    />
  );
};

export default PhotoScroll;

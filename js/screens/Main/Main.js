import React from "react";
import { List, FlatList, Text, View, Image, ScrollView } from "react-native";
import PhotoScroll from "../../components/PhotoScroll";
import Photo from "../../components/Photo";

const Main = ({ dataSource }) => {
  return <PhotoScroll dataSource={dataSource} />;
};

export default Main;

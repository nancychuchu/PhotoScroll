import React from "react";

import { ScrollView, Text, Image, View } from "react-native";

const Photo = ({ title, url }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Image style={{ width: 50, height: 50 }} source={{ uri: url }} />
    </View>
  );
};

export default Photo;

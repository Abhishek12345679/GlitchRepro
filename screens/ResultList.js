import React from "react";
import { View, Text, FlatList } from "react-native";

import ListItem from "../components/ListItem";

const ResultList = (props) => {
  return (
    <FlatList
      data={[
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
        { name: "lorem ipsum", salt: "lorem ipsums", imageUrl: "fake" },
      ]}
      renderItem={(itemData) => {
        return (
          <ListItem
            name={itemData.item.name}
            salt_composition={itemData.item.salt}
            imageUrl={itemData.item.imageUrl}
            onPress={() =>
              props.navigation.navigate("Drug", {
                item: itemData.item,
              })
            }
          />
        );
      }}
    />
  );
};

export default ResultList;

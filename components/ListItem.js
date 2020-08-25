import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ListItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      activeOpacity={0.75}
      onPress={props.onPress}
    >
      <Image source={require("../assets/medicine.png")} style={styles.image} />
      <View style={{ marginStart: 20 }}>
        <Text style={styles.textBig}>{props.name}</Text>
        <Text style={styles.textSmall}>{props.salt_composition}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    width: "100%",
    height: 90,
    backgroundColor: "#000",
    marginVertical: 7.5,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textBig: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  textSmall: {
    fontSize: 15,
    color: "#fff",
  },
  image: {
    height: 60,
    width: 60,
    marginStart: 10,
    borderRadius: 10,
    marginLeft: 0,
  },
});

export default ListItem;

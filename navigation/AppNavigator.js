/*
glitch while navigating to and from this screen due to HeaderLargeTitle and screen transitions
*/

import React from "react";

import ResultList, {
  screenOptions as ResultListScreenOptions,
} from "../screens/ResultList";
import DrugDetailScreen, {
  screenOptions as DrugDetailScreenOptions,
} from "../screens/DrugDetailScreen";

import { enableScreens } from "react-native-screens";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

enableScreens();

const RootStackNavigator = createNativeStackNavigator();
export const RootNavigator = () => {
  return (
    <RootStackNavigator.Navigator
      initialRouteName="Home"
      mode="modal"
      screenOptions={{
        headerStyle: { backgroundColor: "#ffffff00" },
        // headerShown: false
        headerHideShadow: true, // for android
      }}
    >
      <RootStackNavigator.Screen
        name="Results"
        component={ResultList}
        options={{
          headerLargeTitle: true,
        }}
      />
      <RootStackNavigator.Screen
        name="Drug"
        component={DrugDetailScreen}
        options={{
          headerLargeTitle: true,
        }}
      />
    </RootStackNavigator.Navigator>
  );
};

import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import BooksScreen from "./BooksScreen";
import ChaptersScreen from "./ChaptersScreen";

const AppNavigator = createStackNavigator(
  {
    Books: BooksScreen,
    Chapters: ChaptersScreen,
  },
  {
    initialRouteName: "Books",
  }
);

export default createAppContainer(AppNavigator);

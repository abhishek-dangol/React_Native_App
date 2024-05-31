import { Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { Link } from "expo-router";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Hello Again Koko!</Text>
      <Link href="/home" style={{ color: "blue" }}>
        {" "}
        Go to Home
      </Link>
    </View>
  );
};

export default RootLayout;

import { Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { Link } from "expo-router";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Hello Again Koko!</Text>
      <Link href="/profile" style={{ color: "blue" }}>
        {" "}
        Go to Profile
      </Link>
    </View>
  );
};

export default RootLayout;

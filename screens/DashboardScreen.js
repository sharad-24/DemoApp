import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
} from "react-native-reanimated";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function DashboardScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-sky-400 h-full w-full">
      <TouchableOpacity
        className="w-full bg-sky-400 p-3 rounded-2xl mb-0 mt-8"
        onPress={() => navigation.push("Home")}
      >
        <Text className="text-xl font-bold text-white text-start">←</Text>
      </TouchableOpacity>
      <Text className="font-bold text-white text-center text-2xl">
        Dashboard
      </Text>
    </View>
  );
}

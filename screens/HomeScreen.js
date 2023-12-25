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

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-sky-400 h-full w-full">
      <TouchableOpacity
        className="w-full bg-sky-400 p-3 rounded-2xl mb-3 mt-8"
        onPress={() => navigation.push("Login")}
      >
        <Text className="text-xl font-bold text-white text-start">←</Text>
      </TouchableOpacity>
      <View className="p-5">
        <View>
          <TouchableOpacity
            className="w-full bg-white p-3 rounded-2xl mb-3"
            onPress={() => navigation.push("Payment")}
          >
            <Text className="text-xl font-bold text-sky-400 text-center">
              Payment
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="w-full bg-white p-3 rounded-2xl mb-3"
            onPress={() => navigation.push("Question")}
          >
            <Text className="text-xl font-bold text-sky-400 text-center">
              Question
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="w-full bg-white p-3 rounded-2xl mb-3"
            onPress={() => navigation.push("Dashboard")}
          >
            <Text className="text-xl font-bold text-sky-400 text-center">
              Dashboard
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="w-full bg-white p-3 rounded-2xl mb-3"
            onPress={() => navigation.push("Xyz")}
          >
            <Text className="text-xl font-bold text-sky-400 text-center">
              XYZ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

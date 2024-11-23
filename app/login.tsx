import { Link } from "expo-router";
import { View, Text, TextInput, SafeAreaView, Pressable } from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView className="bg-[#2980b9] flex h-full items-center justify-center">
      <Text className="text-2xl text-center uppercase font-bold text-white">
        LOGIN
      </Text>
      <View className="my-16 flex gap-5 w-full px-10">
        <TextInput
          className="w-full h-12 px-3 bg-white rounded-lg"
          placeholder="Username"
        />
        <TextInput
          className="w-full h-12 px-3 bg-white rounded-lg"
          placeholder="Password"
        />
        <Pressable className="w-full bg-[#f39c12] h-12 flex items-center justify-center rounded-lg">
          <Text className="text-center font-bold">LOGIN</Text>
        </Pressable>

        <View>
          <Text
            className="text-center text-sm text-gray-300"
            style={{ lineHeight: 16 }}
          >
            Do not have an account?
          </Text>
          <Link href={"/"} className="my-2">
            <Text className="text-center text-sm text-gray-300">Register</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

import { Link } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View, Text, TextInput, SafeAreaView, Pressable } from "react-native";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(8, { message: "Password must contain 8 characters" }),
});

type FormData = z.infer<typeof schema>;

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const handleLogin: SubmitHandler<FormData> = (formData) => {
    console.log(formData);
  };

  return (
    <SafeAreaView className="bg-[#2980b9] flex h-full items-center justify-center">
      <Text className="text-2xl text-center uppercase font-bold text-white">
        LOGIN
      </Text>
      <View className="my-16 flex gap-5 w-full px-10">
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextInput
              className="w-full h-12 px-3 bg-white rounded-lg"
              placeholder="Username"
              {...field}
              onChangeText={field.onChange}
            />
          )}
        />
        {errors?.username && (
          <View>
            <Text className="text-sm text-red-400" style={{ lineHeight: 12 }}>
              {errors?.username.message}
            </Text>
          </View>
        )}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextInput
              className="w-full h-12 px-3 bg-white rounded-lg"
              placeholder="Password"
              {...field}
              onChangeText={field.onChange}
            />
          )}
        />
        {errors?.password && (
          <View className="my-0 py-0">
            <Text
              className="text-sm text-red-400 my-0 py-0"
              style={{ lineHeight: 12 }}
            >
              {errors?.password.message}
            </Text>
          </View>
        )}
        <Pressable
          className="w-full bg-[#f39c12] h-12 flex items-center justify-center rounded-lg"
          onPress={handleSubmit(handleLogin)}
        >
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

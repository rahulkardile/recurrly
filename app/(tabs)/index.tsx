import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href={"/onboarding"} > <Text>Go to Onboarding</Text> </Link>
      <Link href={"/(auth)/sign-in"} > <Text>Go to Sign In</Text> </Link>

      <Link href="/subscriptions/spotify" > <Text> Know your spotify subscription </Text></Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {
          id: "claude"
        }
      }} > claude subscriptions</Link>
    </View>
  );
} 
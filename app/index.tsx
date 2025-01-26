import React from "react"
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useNavigation } from "@react-navigation/native"
import { Search, ShoppingBag } from "lucide-react-native"

const categories = [
  { id: "1", name: "Food", icon: "🍔" },
  { id: "2", name: "Snacks", icon: "🥨" },
  { id: "3", name: "Dessert", icon: "🍦" },
  { id: "4", name: "Drinks", icon: "🥤" },
]

const foodMenu = [
  {
    id: "1",
    name: "Pizza",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20at%2020.32.04-0BSdcpIpSS7TvFVX8bAVroMRsh8ShR.png",
  },
  {
    id: "2",
    name: "BBQ",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20at%2020.32.04-0BSdcpIpSS7TvFVX8bAVroMRsh8ShR.png",
  },
  {
    id: "3",
    name: "Burgers",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20at%2020.32.04-0BSdcpIpSS7TvFVX8bAVroMRsh8ShR.png",
  },
  {
    id: "4",
    name: "Sushi",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-23%20at%2020.32.04-0BSdcpIpSS7TvFVX8bAVroMRsh8ShR.png",
  },
]

export default function HomeScreen() {
  const navigation = useNavigation()
  const cartItemsCount = 3

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-4 py-2">
        <TouchableOpacity>
          <Text className="text-2xl">≡</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center bg-orange-500 rounded-full px-3 py-1"
          onPress={() => navigation.navigate("Cart")}
        >
          <ShoppingBag size={20} color="white" />
          <Text className="text-white ml-1">{cartItemsCount}</Text>
        </TouchableOpacity>
      </View>

      <View className="px-4 py-2">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <Search size={20} color="gray" />
          <TextInput placeholder="Search" className="flex-1 ml-2" placeholderTextColor="gray" />
        </View>
      </View>

      <ScrollView className="flex-1">
        <View className="flex flex-row px-4 py-4 space-x-4">
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className="grow"
              onPress={() => navigation.navigate("Category")}
            >
              <View className="bg-gray-100 grow h-16 rounded-2xl items-center justify-center">
                <Text className="text-2xl">{category.icon}</Text>
              </View>
              <Text className="mt-2 text-center">{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="px-4">
          <Text className="text-xl font-bold mb-4">Food Menu</Text>
          <View className="flex-row flex-wrap justify-between">
            {foodMenu.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="w-[48%] mb-4 bg-gray-500"
                onPress={() => navigation.navigate("Category")}
              >
                {/* <Image source={{ uri: item.image }} className="w-full h-32 rounded-2xl" resizeMode="cover" /> */}
                <Text className="mt-2 text-center">{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      
    </SafeAreaView>
  )
}


import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  Search,
  ShoppingBag,
  ReceiptText,
  CakeSlice,
  Donut,
  Croissant,
} from "lucide-react-native";
import MenuCard from "@/components/MenuCard";

const categories = [
  { id: "1", name: "Semua", icon: <ReceiptText size={20} color="gray" /> },
  { id: "2", name: "Cake", icon: <CakeSlice size={20} color="gray" /> },
  { id: "3", name: "Roti", icon: <Donut size={20} color="gray" /> },
  { id: "4", name: "Pastry", icon: <Croissant size={20} color="gray" /> },
];

const foodMenu = [
  {
    id: "1",
    name: "Roti fasdfa sf sdfs sfd sd",
    image:
      "https://res.cloudinary.com/dkruiksqq/image/upload/t_Thumbnail/v1738682556/sus_coklat_fjf6o8.jpg",
    bg_color: "#E6EEE0",
    price: "Rp 150",
  },
  {
    id: "2",
    name: "Kue Sus",
    image:
      "https://res.cloudinary.com/dkruiksqq/image/upload/t_Thumbnail/v1738682556/sus_coklat_fjf6o8.jpg",
    bg_color: "#E4E2F0",
    price: "Rp 15000",
  },
  {
    id: "3",
    name: "Bolu Gulung",
    image:
      "https://res.cloudinary.com/dkruiksqq/image/upload/t_Thumbnail/v1738682556/sus_coklat_fjf6o8.jpg",
    bg_color: "#DFE9F2",
    price: "Rp 15000",
  },
  {
    id: "4",
    name: "Apple Pie",
    image:
      "https://res.cloudinary.com/dkruiksqq/image/upload/t_Thumbnail/v1738682556/sus_coklat_fjf6o8.jpg",
    bg_color: "#F2E0D6",
    price: "Rp 15000",
  },
  {
    id: "5",
    name: "Croissant Pie",
    image:
      "https://res.cloudinary.com/dkruiksqq/image/upload/t_Thumbnail/v1738682556/sus_coklat_fjf6o8.jpg",
    bg_color: "#F2E0D6",
    price: "Rp 15000",
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const cartItemsCount = 3;

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

      {/* <View className="px-4 py-2">
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2">
          <Search size={20} color="gray" />
          <TextInput placeholder="Search" className="flex-1 ml-2" placeholderTextColor="gray" />
        </View>
      </View> */}

      <ScrollView className="flex-1">
        <View className="flex flex-row px-4 py-4 space-x-4 gap-1">
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className="grow"
              onPress={() => navigation.navigate("Category")}
            >
              <View className="bg-gray-100 grow h-16 rounded-2xl items-center justify-center">
                {category.icon}
              </View>
              <Text className="mt-2 text-center">{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="px-4">
          <Text className="text-xl font-bold mb-4">Food Menu</Text>
          <View className="flex-row flex-wrap justify-between gap-1">
            {foodMenu.map((item) => (
              <MenuCard
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

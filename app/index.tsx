import React, { useState } from "react";
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
import CategoryRadioItem from "@/components/CategoryRadioItem";
import CategoryRadio from "@/components/CategoryRadio";
import { categories, FoodCategory } from "@/constants/Category";
import { products } from "@/constants/Product";

export default function HomeScreen() {
  const navigation = useNavigation();
  const cartItemsCount = 3;
  const [selectedCategory, setSelectedCategory] = useState(FoodCategory.None);

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
        <CategoryRadio
          categories={categories.map((val) => {
            return { ...val, isSelected: selectedCategory === val.category };
          })}
          onPress={(category) => {
            setSelectedCategory(category);
          }}
        />

        <View className="px-4">
          <Text className="text-xl font-bold mb-4">Food Menu</Text>
          <View className="flex-row flex-wrap justify-between gap-1">
            {products
              .filter((item) => {
                if (selectedCategory === FoodCategory.None) {
                  return true;
                }
                return item.categories.includes(selectedCategory);
              })
              .map((item) => (
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

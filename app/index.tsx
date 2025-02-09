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
import { ShoppingBasket, Headset } from "lucide-react-native";
import MenuCard from "@/components/MenuCard";
import CategoryRadioItem from "@/components/CategoryRadioItem";
import CategoryRadio from "@/components/CategoryRadio";
import { categories, FoodCategory } from "@/constants/Category";
import { products as rawProduct } from "@/constants/Product";
import logo from "@/assets/images/logo.png";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { SheetProvider } from "react-native-actions-sheet";
import "./sheet.tsx";

export default function HomeScreen() {
  const navigation = useNavigation();
  const cartItemsCount = 3;
  const [selectedCategory, setSelectedCategory] = useState(FoodCategory.None);
  const [products, setDisplayedProducts] = useState(rawProduct);
  const totalItem = products.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = products.reduce(
    (total, item) => total + item.quantity * item.priceNumber,
    0
  );

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }
  return (
    <SheetProvider>
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-row items-center justify-between px-4 py-2">
          <View className="flex-row flex-shrink flex-2 items-center justify-start gap-1">
            <View className="h-[32px] w-[32px] rounded-2xl bg-blue-950">
              <Image
                source={logo}
                className="absolute h-full w-full object-contain"
                resizeMode="contain"
              />
            </View>

            <Text className="text-lg font-bold">Pina Bakery</Text>
          </View>

          <View className="flex-row items-end gap-1">
            <TouchableOpacity
              className="flex-row items-center bg-blue-500 rounded-full px-3 py-1"
              onPress={() => {
                SheetManager.show("contact-sheet");
              }}
            >
              <Headset size={20} color="white" />
            </TouchableOpacity>
            {/* <TouchableOpacity
              className="flex-row items-center bg-orange-500 rounded-full px-3 py-1"
              onPress={() => navigation.navigate("Cart")}
            >
              <ShoppingBasket size={20} color="white" />
              <Text className="text-white ml-1">{cartItemsCount}</Text>
            </TouchableOpacity> */}
          </View>
        </View>

        <View
          className={`${
            totalItem > 0 ? "h-[40px] opacity-100" : "h-0 opacity-0"
          } transition-all ease-in-out delay-100 duration-300 px-4 pb-1 flex-row justify-between items-center`}
        >
          <View className="flex-row items-center gap-1">
            <Text className="text-sm">{totalItem} barang</Text>
            <Text className="font-bold text-lg">
              Rp {numberWithCommas(totalPrice)}
            </Text>
          </View>
          <TouchableOpacity className="rounded-full bg-orange-500 px-4 py-2 flex-row gap-1">
            <Text className="text-white text-sm font-semibold">
              Lihat Keranjang & Pesan
            </Text>
            <ShoppingBasket color="white" size={18} />
          </TouchableOpacity>
        </View>

        <View className="h-[1px] bg-gray-300"></View>

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
                .map((item) => {
                  return (
                    <MenuCard
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      quantity={item.quantity}
                      onPlus={() =>
                        setDisplayedProducts((prev) => {
                          var elementIndex = -1;

                          prev.forEach((element, index, array) => {
                            if (element.id === item.id) {
                              elementIndex = index;
                            }
                          });
                          item.quantity = item.quantity + 1;

                          prev[elementIndex] = item;
                          return prev.slice();
                        })
                      }
                      onMinus={() =>
                        setDisplayedProducts((prev) => {
                          var elementIndex = -1;
                          prev.forEach((element, index, array) => {
                            if (element.id === item.id) {
                              elementIndex = index;
                            }
                          });
                          item.quantity = item.quantity - 1;

                          prev[elementIndex] = item;

                          return prev.slice();
                        })
                      }
                    />
                  );
                })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SheetProvider>
  );
}

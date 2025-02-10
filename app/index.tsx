import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
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
import CartItem from "@/components/CartItem";
import waLogo from "@/assets/images/wa.png";

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
  const [showBasket, setShowBasket] = useState(totalItem > 0);

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }

  function decrement(items, item, id) {
    var elementIndex = -1;
    items.forEach((element, index, array) => {
      if (element.id === item.id) {
        elementIndex = index;
      }
    });
    item.quantity = item.quantity - 1;

    items[elementIndex] = item;

    return items.slice();
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
          } transition-all ease-in-out delay-100 duration-300 px-4 pb-1 flex-row justify-between items-center bg-white`}
        >
          <View className="flex-row items-center gap-1">
            <Text className="text-sm">{totalItem} barang</Text>
            <Text className="font-bold text-lg">
              Rp {numberWithCommas(totalPrice)}
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-full bg-orange-500 px-4 py-2 flex-row gap-1"
            onPress={() => {
              setShowBasket(!showBasket);
            }}
          >
            <Text className="text-white text-sm font-semibold">
              {showBasket ? "Tutup Keranjang" : "Lihat Keranjang"}
            </Text>
            <ShoppingBasket color="white" size={18} />
          </TouchableOpacity>
        </View>

        <View className="h-[1px] bg-gray-300"></View>

        <View className="flex-1 w-full bg-white">
          <ScrollView className="absulute flex-1">
            <CategoryRadio
              categories={categories.map((val) => {
                return {
                  ...val,
                  isSelected: selectedCategory === val.category,
                };
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
                        key={item.id}
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
                        onPress={() => {
                          SheetManager.show("product-sheet", {
                            payload: {
                              image: item.image_big,
                              title: item.name,
                            },
                          });
                        }}
                      />
                    );
                  })}
              </View>
            </View>
          </ScrollView>
          <View
            className={`${
              showBasket ? "h-full opacity-100" : "h-0 opacity-0 collapse"
            } bg-white absolute w-full transition-all ease-in-out delay-100 duration-300`}
          >
            <ScrollView
              className={`${
                showBasket ? "h-11 opacity-100" : "h-0 opacity-0 collapse"
              } flex-grow`}
            >
              <View className="flex-col justify-start items-stretch gap-1">
                {products
                  .filter((item) => {
                    return item.quantity > 0;
                  })
                  .map((item) => {
                    return (
                      <CartItem
                        item={item}
                        key={item.id}
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
                            if (
                              prev.reduce((totalItem, item) => {
                                return totalItem + item.quantity;
                              }, 0) <= 0
                            ) {
                              setShowBasket(false);
                            }

                            return prev.slice();
                          })
                        }
                      />
                    );
                  })}
              </View>
              <Text className="text-right mx-4 my-1">{`Total: Rp ${numberWithCommas(
                totalPrice
              )}`}</Text>
            </ScrollView>

            <TouchableOpacity
              className={`m-4 ${
                showBasket ? "h-12 opacity-100" : "h-0 opacity-0 collapse"
              } flex-row bg-orange-500 rounded-full h-12 items-center justify-center gap-2`}
              onPress={() => {
                const order = `Halo Pina Bakery,%0a Saya ingin memesan item berikut ini: ${products
                  .filter((item) => {
                    return item.quantity > 0;
                  })
                  .map((item) => {
                    return (
                      "%0a- " +
                      item.name +
                      " x " +
                      item.quantity +
                      " : Rp" +
                      numberWithCommas(item.quantity * item.priceNumber)
                    );
                  })}%0aTotal: Rp ${numberWithCommas(totalPrice)}`;
                Linking.openURL(`https://wa.me/6285700359424?text=${order}`);
              }}
            >
              <Text className="text-white font-semibold text-l">
                Lanjutkan pesanan via Whatsapp
              </Text>
              <Image source={waLogo} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SheetProvider>
  );
}

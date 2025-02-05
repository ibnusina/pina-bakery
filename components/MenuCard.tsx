import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { ShoppingCart } from "lucide-react-native";

const MenuCard = ({ id, name, price, image }) => {
  return (
    <TouchableOpacity
      key={id}
      className={
        "flex flex-col w-[49%] mb-4 rounded-3xl max-h-70 border bg-white border-white p-1 shadow-md shadow-neutral-400/70"
      }
    >
      <View className="relative grow h-32 rounded-2xl overflow-hidden">
        <Image
          source={{
            uri: image,
          }}
          className="absolute h-full w-full object-contain"
          resizeMode="contain"
        />
      </View>

      <View className="m-2 flex-grow flex flex-col justify-between ">
        <Text className="text-left  w-full]">{name}</Text>
        <View className="flex flex-row flex-2 justify-between items-center overflow-wrap mt-1">
          <Text className="font-bold text-left  max-w-[80%]">{price}</Text>
          <TouchableOpacity className="bg-red-400 flex-shrink p-2 rounded-full flex flex-row pl-2 pr-2">
            <Text className="font-bold text-neutral-50 flex-shrink text-wrap bg-orange-500 break-all">
              +{" "}
            </Text>
            <ShoppingCart size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuCard;

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { ShoppingCart } from "lucide-react-native";

const MenuCard = ({
  id,
  name,
  price,
  image,
  quantity = 0,
  onPlus,
  onMinus,
}) => {
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
          <Text className="text-xs font-bold text-left  max-w-[80%]">
            {price}
          </Text>
        </View>
        {quantity > 0 ? (
          <View className="mt-1 flex-row justify-stretch items-stretch">
            <TouchableOpacity
              className="w-9 bg-orange-500 flex-shrink p-2 rounded-l-full flex flex-row pl-2 pr-2 justify-center"
              onPress={onMinus}
            >
              <Text className="ml-1 font-bold text-xs text-neutral-50 flex-shrink text-wrap bg-orange-500 break-all">
                -
              </Text>
            </TouchableOpacity>
            <View className="pl-2 pr-2 border-orange-500 border flex justify-center items-center flex-grow">
              <Text className="">{quantity}</Text>
            </View>

            <TouchableOpacity
              className="mr-1 w-9 bg-orange-500 flex-shrink p-2 rounded-r-full flex flex-row pl-2 pr-2 justify-center"
              onPress={onPlus}
            >
              <Text className="font-bold text-xs text-neutral-50 flex-shrink text-wrap bg-orange-500 break-all">
                +
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            className="mt-1 bg-orange-500 flex-shrink p-2 rounded-full flex flex-row pl-2 pr-2 justify-center"
            onPress={onPlus}
          >
            <Text className="font-bold text-xs text-neutral-50 flex-shrink text-wrap bg-orange-500 break-all">
              + Keranjang{" "}
            </Text>
            <ShoppingCart size={16} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MenuCard;

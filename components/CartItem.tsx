import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CartItem = ({ item, onMinus = null, onPlus = null }) => {
  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
  }

  return (
    <View>
      <View className="grid grid-flow-row gap-2 grid-cols-5 w-full items-center px-4 py-1">
        <Text className="col-span-3">{item.name}</Text>
        <View className="col-span-1 flex-row justify-stretch items-stretch  w-full">
          <TouchableOpacity
            className="w-9 bg-orange-500 flex-shrink p-2 rounded-l-full flex flex-row pl-2 pr-2 justify-center"
            onPress={onMinus}
          >
            <Text className="ml-1 font-bold text-xs text-neutral-50 flex-shrink text-wrap bg-orange-500 break-all">
              -
            </Text>
          </TouchableOpacity>
          <View className="pl-2 pr-2 border-orange-500 border flex justify-center items-center flex-grow">
            <Text className="">{item.quantity}</Text>
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
        <Text className="col-span-1 text-right">
          {`Rp ${numberWithCommas(item.priceNumber * item.quantity)}`}
        </Text>
        <View className="bg-neutral-200 col-span-5 h-[1px]"></View>
      </View>
    </View>
  );
};

export default CartItem;

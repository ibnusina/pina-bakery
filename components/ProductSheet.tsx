import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
} from "react-native-actions-sheet";

const ProductSheet = (props: SheetProps<"product-sheet">) => {
  return (
    <ActionSheet>
      <View className="m-4 justify-center items-center">
        <Text className="font-bold">{props.payload?.title}</Text>
        <View className="relative w-full h-96 rounded-2xl overflow-hidden">
          <Image
            source={{
              uri: props.payload?.image,
            }}
            className="w-full object-contain h-96 mt-2"
            resizeMode="contain"
          ></Image>
        </View>
        <TouchableOpacity
          className="mt-2 bg-orange-500 rounded-full py-2 px-4"
          onPress={() => {
            SheetManager.hide("product-sheet");
          }}
        >
          <Text className="font-semibold text-white">Tutup</Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

export default ProductSheet;

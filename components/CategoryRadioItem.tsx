import { View, Text, TouchableOpacity } from "react-native";
import { cloneElement } from "react";

const CategoryRadioItem = ({ id, name, icon, isSelected = false, onPress }) => {
  return (
    <TouchableOpacity
      key={id}
      className="grow"
      onPress={() => {
        onPress(id);
      }}
    >
      <View
        className={`${
          isSelected ? "bg-gray-900" : "bg-gray-100"
        } grow h-16 rounded-2xl items-center justify-center`}
      >
        {cloneElement(icon, {
          size: 20,
          color: isSelected ? "white" : "#696969",
        })}
      </View>
      <Text className="mt-2 text-center">{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryRadioItem;

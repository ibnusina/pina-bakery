import { View, Text } from "react-native";
import { useState } from "react";
import CategoryRadioItem from "./CategoryRadioItem";

const CategoryRadio = ({ categories, onPress }) => {
  const [categoriesState, setCategories] = useState(categories);
  return (
    <View className="flex flex-row px-4 py-4 space-x-4 gap-1">
      {categoriesState?.map((category) => (
        <CategoryRadioItem
          key={category.category}
          id={category.category}
          name={category.name}
          icon={category.icon}
          isSelected={category.isSelected}
          onPress={(id) =>
            setCategories((prevValue) => {
              const mapped = prevValue.map((val) => {
                if (val.category === id) {
                  val.isSelected = true;
                } else {
                  val.isSelected = false;
                }
                return val;
              });
              onPress(id);
              return mapped;
            })
          }
        />
      ))}
    </View>
  );
};

export default CategoryRadio;

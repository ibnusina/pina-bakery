import { ReceiptText, CakeSlice, Donut, Croissant } from "lucide-react-native";

export enum FoodCategory {
  None,
  Cake,
  Bread,
  Pastry,
}

export const categories = [
  {
    name: "Semua",
    isSelected: false,
    icon: <ReceiptText />,
    category: FoodCategory.None,
  },
  {
    name: "Cake",
    isSelected: false,
    icon: <CakeSlice />,
    category: FoodCategory.Cake,
  },
  {
    name: "Roti",
    isSelected: false,
    icon: <Donut />,
    category: FoodCategory.Bread,
  },
  {
    name: "Pastry",
    isSelected: false,
    icon: <Croissant />,
    category: FoodCategory.Pastry,
  },
];

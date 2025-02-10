import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import ContactSheet from "@/components/ContactSheet";
import ProductSheet from "@/components/ProductSheet";

registerSheet("contact-sheet", ContactSheet);
registerSheet("product-sheet", ProductSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "contact-sheet": SheetDefinition;
    "product-sheet": SheetDefinition<{
      payload: {
        image: string;
        title: string;
      };
    }>;
  }
}

export {};

import { registerSheet } from "react-native-actions-sheet";
import ContactSheet from "@/components/ContactSheet";

registerSheet("contact-sheet", ContactSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "contact-sheet": SheetDefinition;
  }
}

export {};

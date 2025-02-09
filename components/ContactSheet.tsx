import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import igLogo from "@/assets/images/ig.png";
import waLogo from "@/assets/images/wa.png";

function ContactSheet() {
  const data = [
    {
      type: "instagram",
      title: "DM instagram kami",
      logo: igLogo,
      url: "https://www.instagram.com/_pinabakery",
    },
    {
      type: "whatsapp",
      title: "Chat lewat whatsapp",
      logo: waLogo,
      url: "https://wa.me/6285700359424",
    },
  ];

  return (
    <ActionSheet>
      <View className="m-4">
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  SheetManager.hide("contact-sheet");
                  Linking.openURL(item.url);
                }}
              >
                <View className="flex-row justify-start items-center gap-2">
                  <Image source={item.logo} />
                  <Text className="text-lg my-2">{item.title}</Text>
                </View>

                <View className="h-[1px] bg-neutral-200"></View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.type}
        />
      </View>
    </ActionSheet>
  );
}

export default ContactSheet;

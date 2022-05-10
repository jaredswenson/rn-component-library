import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import Text from "../Text";
import { useThemeColor } from "../Themed";
type Props = {
  title: string;
};

const Tag: React.FC<Props> = ({ title }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 3,
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        styles={{ textTransform: "uppercase" }}
        title={title}
        color={Colors.theme.secondary[500]}
        family="bold"
        size={12}
      />
    </View>
  );
};

export default Tag;

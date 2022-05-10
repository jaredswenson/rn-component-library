import React from "react";
import { TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";
import Text from "../Text";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  title: string;
  type: "primary" | "secondary" | "success" | "error" | "warning";
  typeShade:  number;
  onPress: () => void;
  outline: boolean;
  ghost: boolean;
  icon?: string;
  round?: boolean;
  buttonStyle?: any;
  iconStyle?: any;
  textStyle?: any;
};

const MyButton: React.FC<Props> = ({
  title = "Press me",
  type = "primary",
  onPress = () => console.log("pressed"),
  outline = false,
  ghost = false,
  icon = null,
  round = false,
  buttonStyle = null,
  iconStyle = null,
  textStyle = null,
}) => {
  const backgroundColor = () => {
    switch (type.toLowerCase()) {
      case "primary":
        return outline ? Colors.theme.primary[50] : Colors.theme.primary[400];
      case "secondary":
        return outline
          ? Colors.theme.secondary[50]
          : Colors.theme.secondary[400];
      case "success":
        return outline ? Colors.theme.success[50] : Colors.theme.success[400];
      case "error":
        return outline ? Colors.theme.error[50] : Colors.theme.error[400];
      case "warning":
        return outline ? Colors.theme.warning[50] : Colors.theme.warning[400];
      default:
        return outline ? Colors.theme.primary[50] : Colors.theme.primary[400];
    }
  };

  const borderColor = () => {
    switch (type.toLowerCase()) {
      case "primary":
        return Colors.theme.primary[400];
      case "secondary":
        return Colors.theme.secondary[400];
      case "success":
        return Colors.theme.success[400];
      case "error":
        return Colors.theme.error[400];
      case "warning":
        return Colors.theme.warning[400];
      default:
        return Colors.theme.primary[400];
    }
  };

  const getColor = () => {
    if (ghost) return backgroundColor();
    else if (outline) return borderColor();
    else return Colors.theme.primary[50];
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{
        backgroundColor: !ghost && backgroundColor(),
        borderColor: !ghost && borderColor(),
        borderWidth: ghost ? 0 : 0.75,
        padding: 8,
        margin: 5,
        borderRadius: round ? '50%' : 6,
        flexDirection: "row",
        alignItems: "center",
      }, buttonStyle]}
    >
      {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={getColor()}
          style={[{ marginRight: !round && 8 }, iconStyle]}
        />
      )}
      {!round && (
        <Text
          title={title}
          color={getColor()}
          family={Fonts.primary600}
          size={16}
          styles={textStyle}
        />
      )}
    </TouchableOpacity>
  );
};

export default MyButton;

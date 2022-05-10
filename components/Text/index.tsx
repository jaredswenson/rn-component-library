import React from 'react';
import {Text as NativeText} from 'react-native';
import Fonts from '../../constants/Fonts';
import { useThemeColor } from '../Themed';

type Props = { 
  title: string;
  size?: number | string,
  family?: 'extra-bold' | 'bold' | 'regular' | 'semi-bold',
  color?: string,
  link?: boolean,
  styles?: any,
}

const Text: React.FC<Props> = ({
  title = "Hello",
  size = 16,
  family = "",
  color = useThemeColor({ light: "#fff", dark: "#000" }, "text"),
  link = false,
  styles = null,
}) => {

  const getFamily = () => {
    switch (family) {
      case "bold":
        return Fonts.primary700;
      case "extra-bold":
        return Fonts.primary900;
      case "regular":
        return Fonts.primary400;
      case "semi-bold":
        return Fonts.primary600;
      default:
        return Fonts.primary600;
    }
  };

  return (
    <NativeText
      style={[
        {
          fontSize: size,
          color: color,
          fontFamily: getFamily(),
          textDecorationLine: link ? "underline" : "none",
        },
        styles,
      ]}
    >
      {title}
    </NativeText>
  );
};

export default Text;
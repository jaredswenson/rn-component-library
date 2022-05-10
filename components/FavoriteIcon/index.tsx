import React from "react";
import Colors from "../../constants/Colors";
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableOpacity, Image } from "react-native";
import Text from '../Text';
type Props = {
  isFavorite: boolean;
  onPress: () => void;
};

const FavoriteIcon: React.FC<Props> = ({isFavorite, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {isFavorite ? (
        <Image
          source={require("./favorite.png")}
          style={{ height: 24, width: 24 }}
        />
      ) : (
        <FontAwesome name="heart-o" size={24} color={Colors.theme.primary[200]} />
      )}
    </TouchableOpacity>
  );
};

export default FavoriteIcon;

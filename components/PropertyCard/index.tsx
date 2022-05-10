import React from 'react';
import { View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import Layout from '../../constants/Layout';
import Tag from '../Tag';
import FavoriteIcon from '../FavoriteIcon';
import Text from '../Text';
import { MaterialIcons } from '@expo/vector-icons';

type Props = { 
  mls: any;
};

const CARD_HEIGHT = Layout.window.height * 0.4009;
const SLIDE_HEIGHT = Layout.window.height * 0.28;
const PropertyCard: React.FC<Props> = ({ mls }) => {
  const [isFavorite, setIsFavorite] = React.useState(mls.favorite);

  return (
    <View style={styles.shadow}>
      <View style={styles.container}>
        <View style={styles.slideContainer}>
          <ImageBackground
            source={mls.image}
            style={{ height: SLIDE_HEIGHT, minWidth: "100%", padding: 31 }}
            resizeMode="cover"
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Tag title="New" />
              <FavoriteIcon
                isFavorite={isFavorite}
                onPress={() => setIsFavorite(!isFavorite)}
              />
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            paddingVertical: 7,
            paddingHorizontal: 19,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text title={mls.price} size={18} family="bold" />
          <MaterialIcons name="more-horiz" size={24} color="black" />
        </View>
        <View style={{ paddingHorizontal: 19 }}>
          <Text title={`${mls.city}, ${mls.state} ${mls.postalCode}`} size={12} color="#6B797D" />
          <View style={{marginTop: 4}}>
            <Text title="BED    BATH    SQFT" size={12} color="#6B797D" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 2,
    backgroundColor: "#fff",
    height: CARD_HEIGHT,
    width: 400,
    borderRadius: 6,
  },
  container: {
    height: CARD_HEIGHT,
    borderRadius: 6,
    overflow: "hidden",
  },
  slideContainer: {
    height: SLIDE_HEIGHT
  }
});

export default PropertyCard;
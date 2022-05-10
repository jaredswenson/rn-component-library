import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import FavoriteIcon from "../../../components/FavoriteIcon";
import { TouchableOpacity, Text } from "react-native";

storiesOf("Favorite Icon", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Favorite Icon", () => {
    function Parent({ children, ...props }) {
      const [isFavorite, setIsFavorite] = React.useState(false);
      return <>{children(isFavorite, setIsFavorite)}</>;
    }

    return (
      <Parent>
        {(isFavorite, setIsFavorite) => (
          <FavoriteIcon onPress={() => setIsFavorite(!isFavorite)} isFavorite={isFavorite} />
        )}
      </Parent>
    );
  });

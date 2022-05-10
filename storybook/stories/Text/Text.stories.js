import { action } from '@storybook/addon-actions';
import { text, color, select, options, object, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Text from '../../../components/Text'
import Colors from '../../../constants/Colors';
import Fonts from '../../../constants/Fonts';

storiesOf("Text", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Text", () => (
    <Text
      title={text("Text", "Here is some text")}
      size={select(
        "Font Size",
        { 24: 24, 22: 22, 18: 18, 16: 16, 14: 14, 12: 12 },
        16
      )}
      family={select(
        "Font Family",
        {
          Bold: "bold",
          "Extra Bold": "extra-bold",
          Regular: "regular",
          "Semi Bold": "semi-bold",
        },
        'regular'
      )}
      color={select(
        "Color",
        {
          Primary: Colors.theme.primary[800],
          Secondary: Colors.theme.secondary[400],
          Success: Colors.theme.success[400],
          Error: Colors.theme.error[400],
          Warning: Colors.theme.warning[400],
        },
        Colors.theme.primary[800]
      )}
      link={boolean("Link", false)}
    />
  ));

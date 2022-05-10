import { action } from '@storybook/addon-actions';
import { text, color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CenterView from '.';
import CenterView from '../CenterView';

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <CenterView><Text>Hello</Text></CenterView>
  ));

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Tag from '../../../components/Tag'

storiesOf("Tag", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Tag", () => <Tag title={text("Text", "new")} />);

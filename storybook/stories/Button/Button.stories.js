import { action } from '@storybook/addon-actions';
import { text, select, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import Button from '../../../components/Button'

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <Button
      title={text("Button text", "Hello Button")}
      type={select(
        "Button type",
        {
          Primary: "Primary",
          Secondary: "Secondary",
          Success: "Success",
          Warning: "Warning",
          Error: "Error",
        },
        "Primary"
      )}
      outline={boolean("Outline", false)}
      ghost={boolean("Ghost", false)}
      icon={text("Icon", "10k")}
      onPress={action("clicked-button")}
      round={boolean("Round", false)}
    />
  ))
  .add("Success Button", () => (
    <Button
      title={text("Button text", "Hello Button")}
      type={"Success"}
      outline={boolean("Outline", true)}
      ghost={boolean("Ghost", false)}
      icon={text("Icon", "10k")}
      onPress={action("clicked-button")}
      round={boolean("Round", false)}
    />
  ));

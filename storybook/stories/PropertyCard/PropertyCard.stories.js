import { object, text, boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterView from "../CenterView";
import PropertyCard from "../../../components/PropertyCard";

const value = {
  image: { uri: "https://reactjs.org/logo-og.png" },
  price: "$438,000",
  favorite: true,
  city: "South Salt Lake",
  state: "UT",
  postalCode: "84115",
  beds: 4,
  baths: 2,
  sqft: "1,200",
};
storiesOf("PropertyCard", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("PropertyCard", () => (
    <PropertyCard mls={object("MLS", value, "MLS-GROUP")} />
  ));

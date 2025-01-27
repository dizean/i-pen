import React from "react";
import { Text as RNText, TextInput as RNTextInput, TextProps, TextInputProps } from "react-native";
export const TextBold = (props: TextProps) => {
  return <RNText {...props} style={[{ fontFamily: "ComicSansBold"}, props.style]} />;
};
export const TextLight = (props: TextProps) => {
  return <RNText {...props} style={[{ fontFamily: "ComicSansMedium"}, props.style]} />;
};
export const TextMedium = (props: TextProps) => {
  return <RNText {...props} style={[{ fontFamily: "ComicSans"}, props.style]} />;
};
export const TextNormal = (props: TextProps) => {
  return <RNText {...props} style={[{ fontFamily: "ComicSansLight" }, props.style]} />;
};

export const TextInput = (props: TextInputProps) => {
  return <RNTextInput {...props} style={[{ fontFamily: "ComicSansMedium"}, props.style]} />;
};

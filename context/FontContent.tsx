import React from "react";
import { Text as RNText, TextInput as RNTextInput, TextProps, TextInputProps } from "react-native";

export const Text = (props:TextProps) =>{
  return <RNText {...props} style={[{ fontFamily: "Font" }, props.style]} />;
}

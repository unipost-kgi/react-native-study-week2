import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

type SearchBarProps = {
  onFilterTextChange: (text: string) => void;
};
export default function SearchBar({ onFilterTextChange }: SearchBarProps) {
  return (
    <View style={styles.textInputArea}>
      <TextInput
        placeholder="검색어를 입력해주세요."
        style={styles.textInput}
        onChangeText={(text) => onFilterTextChange(text)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputArea: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textInput: {
    width: '95%',
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
});

import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type menuItemProps = {
  id: number;
  text: string;
  selected?: boolean;
  onToggleMenu: (id: number) => void;
};

export default function MenuItem({ id, text, selected, onToggleMenu }: menuItemProps) {
  return (
    <>
      {selected ? (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.checkedButton}
          onPress={() => onToggleMenu(id)}
        >
          <Text style={styles.checkedText}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.unCheckedButton}
          onPress={() => onToggleMenu(id)}
        >
          <Text style={styles.unCheckedText}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  checkedButton: {
    width: 70,
    height: 30,
    backgroundColor: '#5f37ff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedText: {
    fontSize: 13,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  unCheckedButton: {
    width: 70,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5f37ff',
  },
  unCheckedText: {
    fontSize: 13,
    color: '#5f37ff',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { menu } from '../../type/type';
import MenuItem from './MenuItem';

type MenuHeadProps = {
  menus: Array<menu>;
  onToggleMenu: (id: number) => void;
};
export default function MenuHead({ menus, onToggleMenu }: MenuHeadProps) {
  const menuArea = menus.map((menu, index) => {
    return (
      <View style={styles.buttonArea}>
        <MenuItem
          id={menu.id}
          text={menu.text}
          selected={menu.selected}
          onToggleMenu={onToggleMenu}
        />
      </View>
    );
  });

  return <View style={styles.container}>{menuArea}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonArea: {
    marginTop: 20,
    marginLeft: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

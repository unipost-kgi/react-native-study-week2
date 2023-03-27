import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import QnAItem from './QnAItem';
import { qna } from '../../type/type';

type QnAListProps = {
  filterText: Array<qna>;
  onToggleQnA: (id: number) => void;
};

export default function QnAList({ filterText, onToggleQnA }: QnAListProps) {
  return (
    <FlatList
      data={filterText}
      renderItem={({ item }) => (
        <QnAItem
          id={item.id}
          question={item.question}
          answer={item.answer}
          selected={item.selected}
          onToggleQnA={onToggleQnA}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

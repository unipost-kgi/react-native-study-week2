import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type AnswerProps = {
  answer: string;
};

export default function AnswerItem({ answer }: AnswerProps) {
  return (
    <View style={styles.answerArea}>
      <View style={styles.answerIconArea}>
        <Text style={styles.answerIcon}>A</Text>
      </View>
      <Text style={styles.answerText}>{answer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  answerArea: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f5f5f8',
  },
  answerIconArea: {
    width: 24,
    height: 24,
    backgroundColor: 'gray',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerIcon: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  answerText: {
    fontSize: 14,
    marginLeft: 15,
    marginRight: 25,
    color: '#333',
  },
});

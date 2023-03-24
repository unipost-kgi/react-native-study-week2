import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

type QuestionItemProps = {
  id: number;
  question: string;
  onToggleQnA: (id: number) => void;
};
export default function QuestionItem({ id, question, onToggleQnA }: QuestionItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onToggleQnA(id)}>
      <View style={styles.questionArea}>
        <View style={styles.questionIconArea}>
          <Text style={styles.questionIcon}>Q</Text>
        </View>
        <View style={styles.qeustionTextArea}>
          <Text style={styles.qeustionText}>{question}</Text>
        </View>
        <View style={styles.downIconArea}>
          <Icon name="chevron-down" style={styles.downIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  questionArea: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  questionIconArea: {
    width: 24,
    height: 24,
    backgroundColor: '#5f37ff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionIcon: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  qeustionTextArea: {
    flex: 1,
    marginLeft: 15,
    margtinRight: 25,
  },
  qeustionText: {
    fontSize: 14,
    color: '#333',
  },
  downIconArea: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downIcon: {
    fontSize: 18,
    color: 'gray',
  },
});

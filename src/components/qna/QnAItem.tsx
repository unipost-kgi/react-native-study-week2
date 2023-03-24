import { StyleSheet, View } from 'react-native';
import React from 'react';
import QuestionItem from './QuestionItem';
import AnswerItem from './AnswerItem';

type QnAItemProps = {
  id: number;
  question: string;
  answer: string;
  selected: boolean;
  onToggleQnA: (id: number) => void;
};

export default function QnAItem({ id, question, answer, selected, onToggleQnA }: QnAItemProps) {
  return (
    <View>
      <QuestionItem id={id} question={question} onToggleQnA={onToggleQnA} />
      {selected && <AnswerItem answer={answer} />}
    </View>
  );
}

const styles = StyleSheet.create({});

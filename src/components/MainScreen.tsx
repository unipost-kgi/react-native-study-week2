import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import MenuHead from './menu/MenuHead';
import SearchBar from './search/SearchBar';
import QnAList from './qna/QnAList';

export default function MainScreen() {
  const [menus, setMenus] = useState([
    {
      id: 1,
      text: '전체보기',
      selected: true,
    },
    {
      id: 2,
      text: '서비스',
      selected: false,
    },
    {
      id: 3,
      text: '어플',
      selected: false,
    },
    {
      id: 4,
      text: '이용방법',
      selected: false,
    },
    {
      id: 5,
      text: '고객센터',
      selected: false,
    },
  ]);

  const [qnas, setQnas] = useState([
    {
      id: 1,
      question: '코멘토는 어떤 서비스 인가요?',
      answer: '코멘토 서비스는 교육생과 멘토를 연결해주는 서비스 입니다.',
      selected: false,
    },
    {
      id: 2,
      question: '코멘토 어플은 어떻게 다운 받나요?',
      answer: '코멘토 어플은 안드로이드 Play Store 또는 iOS App Store에서 다운받을 수 있습니다',
      selected: false,
    },
    {
      id: 3,
      question: '코멘토의 이용방법은 어떻게 되나요?',
      answer: '코멘토의 이용방법은 코멘토 홈페이지에서 확인할 수 있습니다.',
      selected: false,
    },
    {
      id: 4,
      question: '코멘토의 고객센터는 어디인가요?',
      answer: '코멘토의 고객센터는 코멘토 홈페이지에서 확인할 수 있습니다.',
      selected: false,
    },
  ]);

  const [filterText, setFilterText] = useState(qnas);

  const onToggleMenu = (id: number) => {
    const newMenus = menus.map((menu) =>
      menu.id === id ? { ...menu, selected: true } : { ...menu, selected: false },
    );
    setMenus(newMenus);
    const newFilterText = qnas.filter((qna) => qna.question.includes(menus[id - 1].text));
    id === 1 ? setFilterText(qnas) : setFilterText(newFilterText);
  };

  const onToggleQnA = (id: number) => {
    const newFilterText = filterText.map((qna) =>
      qna.id === id ? { ...qna, selected: !qna.selected } : qna,
    );
    setFilterText(newFilterText);

    const newQnAs = qnas.map((qna) => (qna.id === id ? { ...qna, selected: !qna.selected } : qna));
    setQnas(newQnAs);
  };

  const onFilterTextChange = (text: string) => {
    const newFilterText = qnas.filter((qna) => qna.question.includes(text));
    setFilterText(newFilterText);
  };

  return (
    <>
      <MenuHead menus={menus} onToggleMenu={onToggleMenu} />
      <SearchBar onFilterTextChange={onFilterTextChange} />
      <QnAList filterText={filterText} onToggleQnA={onToggleQnA} />
    </>
  );
}

const styles = StyleSheet.create({});

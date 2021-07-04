import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput ,authService }) => {
  const [cards, setCards] = useState({
    '1': {
        id: '1',
        name: 'John',
        company: 'Iset',
        theme: 'light',
        title: 'Software Developer',
        email: 'juni0227@naver.com',
        message: 'go for it',
        fileName: 'john',
        fileURL: ''
      },
    '2': {
        id: '2',
        name: 'John2',
        company: 'Iset',
        theme: 'light',
        title: 'Software Developer',
        email: 'juni0227@naver.com',
        message: 'go for it',
        fileName: 'john',
        fileURL: ''
      },
    '3': {
        id: '3',
        name: 'John3',
        company: 'Iset',
        theme: 'light',
        title: 'Software Developer',
        email: 'juni0227@naver.com',
        message: 'go for it',
        fileName: 'john',
        fileURL: ''
      }
  });
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        history.push('/');
      }
    })
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
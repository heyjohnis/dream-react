import React from 'react';
import styles from './editor.module.css';

const Editor = ({cards}) => {
  return (
    <section className={styles.editor}>
      <h1>Card Maker</h1>
      {
        cards.map(card => <h1>{card.id}</h1>)
      }
    </section>
  );
};

export default Editor;
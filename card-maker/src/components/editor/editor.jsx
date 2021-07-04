import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';
import styles from './editor.module.css';

const Editor = ({FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1>Card Maker</h1>
      {
        Object.keys(cards).map(key => <CardEditForm FileInput={FileInput} key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard}  />)
      }
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </section>
  );
};

export default Editor;
import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, theme, title, email, message, fileName } = card;

  const onSubmit = () => {
    console.log(card);
    deleteCard(card)
  };
  const onChange = (event) => {
    if(event.currentTarget.value == null ) {
      return;
    }
    event.preventDefault();
    updateCard( {
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  };

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    })
  };

  return(
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} onChange={onChange}  />
      <input className={styles.input} type="text" name="company" value={company} onChange={onChange} />
      <select name="theme" value={theme} onChange={onChange} >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} onChange={onChange} />
      <input className={styles.input} type="text" name="email" value={email} onChange={onChange} />
      <textarea className={styles.textarea} name="message" value={message} onChange={onChange} />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );     
};

export default CardEditForm;
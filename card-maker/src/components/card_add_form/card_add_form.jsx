import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: '',
      fileURL: ''
    };
    formRef.current.reset();
    onAdd(card);
  };

  return(
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" />
      <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="Company" />
      <select ref={themeRef} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title" />
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email" />
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message" />
      <div className={styles.fileInput}>
        <FileInput />
      </div>
      <Button name='Add' onClick={onSubmit} />
    </form>
  );     
};

export default CardAddForm;
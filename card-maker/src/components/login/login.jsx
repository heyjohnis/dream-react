import { useHistory } from 'react-router-dom'
import React, { useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './login.module.css';

const Login = ({authService}) => {
  const history = useHistory();
  const gotToMaker = userId => {
    history.push({
     pathname: '/maker',
     state: {id: userId},
    });
  };
  const onLogin = event => {
    console.log("authService");
    authService
      .login(event.currentTarget.textContent)
      .then(data => gotToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      user && gotToMaker(user.id);
    })
  });
  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
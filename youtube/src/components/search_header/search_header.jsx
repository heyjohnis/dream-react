import React, {useRef} from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(`key input : ${value}`);
    props.onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.bi}><img src="/images/tjc-logo.png" alt="Logo" /> TJC TV</h1>
      <div className={styles.search}>
        <input type="text" ref={inputRef} placeholder="검색어를 입력하세요" onKeyPress={onKeyPress} />
        <button onClick={onClick}>검색</button>
      </div>
    </header>
  );
}
export default SearchHeader;
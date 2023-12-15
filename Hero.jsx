import React from 'react';
import styles from './Hero.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className={styles.hero}>
          <div className={styles.text_bg}>
            <p>
              <span>Lugares maravilhosos esperando por sua ajuda</span>
          </p>
          </div>
      <form>
        <div className={styles.text}>
          <input
            className={styles.text_input}
            type='text'
            placeholder='Digite aqui'
          />
        </div>
        <div className={styles.search_btn}>
          <AiOutlineSearch size={25} className={styles.icon} />
        </div>
      </form>
    </div>
  );
};

export default Hero;

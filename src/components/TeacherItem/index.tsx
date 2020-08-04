import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
  return (
    <article className='teacher-item'>
      <header>
        <img src="https://avatars0.githubusercontent.com/u/54669963?s=460&u=6e36b82b3528e3792f9f3980d044db4f61918c02&v=4" alt='Marco' />
        <div>
          <strong>Marco</strong>
          <span>React</span>
        </div>
      </header>

      <p>
        Teste
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
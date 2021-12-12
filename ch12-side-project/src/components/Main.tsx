import React, { useState } from 'react';
import { Header } from './header';
import { Body } from './body';
import { Modal } from './modal';

type CardType = 'IMAGE' | 'VIDEO' | 'NOTE' | 'TASK';

function Main() {
  const [showModal, setShowModal] = useState(true);
  const [type, setType] = useState<CardType>('IMAGE');

  const openEditModal = (type: CardType) => {
    setType(type);
    setShowModal(true);
  };

  return (
    <main>
      <Header openEditModal={openEditModal} />
      <Body />
      {showModal && <Modal setShowModal={setShowModal} type={type} />}
    </main>
  );
}

export default Main;

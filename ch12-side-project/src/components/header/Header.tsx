import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';

type CardType = 'IMAGE' | 'VIDEO' | 'NOTE' | 'TASK';

function Header({ openEditModal }: { openEditModal: (type: CardType) => void }) {
  const types: CardType[] = ['IMAGE', 'VIDEO', 'NOTE', 'TASK'];
  return (
    <SHeader>
      <section>
        <Title>MOTION</Title>
      </section>
      <section>
        <ul>
          {types.map((type) => (
            <li key={type}>
              <SButton text={type} onClick={() => openEditModal(type)} />
            </li>
          ))}
        </ul>
      </section>
    </SHeader>
  );
}

export default Header;

const SHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: var(--bg-main-color);
  padding: 20px;

  ul {
    display: flex;
    gap: 20px;
    padding: 0 20px;
  }
`;

const Title = styled.b`
  font-size: 3rem;
  color: var(--accent-color);
`;

const SButton = styled(Button)`
  width: 100%;
`;

import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Label from '../common/Label';

type CardType = 'IMAGE' | 'VIDEO' | 'NOTE' | 'TASK';
const types: CardType[] = ['IMAGE', 'VIDEO', 'NOTE', 'TASK'];

function Modal({ setShowModal, type }: { setShowModal: (arg: boolean) => void; type: string }) {
  const onMaskClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  const onClose = () => {
    setShowModal(false);
  };
  const onAdd = () => {
    console.log('????add', type);
  };
  return (
    <WrapModal onClick={onMaskClick}>
      <SModal>
        <CloseButton onClick={onClose}>x</CloseButton>
        <Contents>
          <ul>
            <li>
              <Label text="Title">
                <input type="text" />
              </Label>
            </li>
            <li>
              <Label text={type === types[0] || type === types[1] ? 'URL' : 'value'}>
                <input type="text" />
              </Label>
            </li>
          </ul>
        </Contents>
        <AddButton text="ADD" onClick={onAdd} />
      </SModal>
    </WrapModal>
  );
}

export default Modal;

const WrapModal = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-main-color);
`;

const SModal = styled.section`
  display: grid;
  grid-template-rows: 1em 3fr 1fr;
  position: relative;
  width: 50%;
  padding: 10px;
  border-radius: 5px;
  background: var(--component-bg-gradient);
`;

const CloseButton = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  color: var(--accent-color);
`;

const Contents = styled.article`
  width: 100%;
  ul {
    li:first-child {
      margin-bottom: 10px;
    }
    input {
      background-color: var(--text-edit-bg-color);
    }
  }
`;

const AddButton = styled(Button)`
  width: 70px;
  justify-self: flex-end;
`;

import React from 'react';
import styled from 'styled-components';

function Button({ text, onClick, className }: { text: string; onClick: () => void; className?: string }) {
  return (
    <SButton className={className} onClick={onClick}>
      {text}
    </SButton>
  );
}

export default Button;

const SButton = styled.button`
  background-color: var(--accent-color);
  border-style: none;
  border-radius: 2px;
  padding: 8px 22px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

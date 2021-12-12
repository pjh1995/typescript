import React from 'react';
import styled from 'styled-components';

function Label({ text, children }: { text: string; children?: any }) {
  return (
    <SLabel>
      {text}
      {children}
    </SLabel>
  );
}

export default Label;

const SLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: var(--text-accent-color);
  font-size: small;
`;

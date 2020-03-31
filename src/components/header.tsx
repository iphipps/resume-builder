import * as React from 'react';
import { IHeader } from '~/lib';
import styled from '@emotion/styled';

type HeaderProps = {
  content: IHeader
};

const Header_ = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
`;

const Side = styled.div``;
const Title_ = styled.h1`
  text-align: center;
`;

export const Header = ({
  content: { left1, left2, right1, right2, title }
}: HeaderProps) => {
  return (
    <Header_>
      <Side>
        <p>{left1}</p>
        <p>{left2}</p>
      </Side>
      <Title_>{title}</Title_>

      <Side>
        <p>{right1}</p>
        <p>{right2}</p>
      </Side>
    </Header_>
  );
};

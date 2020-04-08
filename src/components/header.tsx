import * as React from 'react';
import { IHeader } from '~/lib';
import styled from '@emotion/styled';
import { spacings } from '../globalStyles';

type HeaderProps = {
  content: IHeader
};

const Header_ = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  ${spacings.mbd1};
`;

const Side = styled.div`
  p {
    padding: 0;
  }
`;
const Title_ = styled.h1`
  text-align: center;
`;

export const Header = ({
  content: { left1, left2, right1, right2, title }
}: HeaderProps) => {
  return (
    <Header_>
      <Side>
        <p className="mb-b">{left1}</p>
        <p className="mb-b">{left2}</p>
      </Side>
      <Title_>{title}</Title_>

      <Side>
        <p>{right1}</p>
        <p>{right2}</p>
      </Side>
    </Header_>
  );
};

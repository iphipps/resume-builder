import * as React from 'react';
import { IHeader } from '~/lib';

type HeaderProps = {
  content: IHeader;
}

export const Header = ({content}: HeaderProps) => {
  console.log(content);
  return <header>hello</header>;
};

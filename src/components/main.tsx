import * as React from 'react';
import { IMain } from '~lib';

type MainProps = {
  content: IMain[]
};
export const Main = ({ content }: MainProps) => {
  console.log(content);
  return <main>hello</main>;
};

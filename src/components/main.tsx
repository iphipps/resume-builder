import * as React from 'react';
import { IMain } from '~lib';
import { Section } from './section';

type MainProps = {
  contents: IMain[]
};

export const Main = ({ contents }: MainProps) => {
  return (
    <main>
      {contents.map((content, index) => (
        <Section content={content} key={index} />
      ))}
    </main>
  );
};

import * as React from 'react';
import { IMain } from '~lib';
import { Section } from './section';

type MainProps = {
  content: IMain[]
};

export const Main = ({ content }: MainProps) => {
  return (
    <main>
      {content.map((content, index) => (
        <Section content={content} key={index} />
      ))}
    </main>
  );
};

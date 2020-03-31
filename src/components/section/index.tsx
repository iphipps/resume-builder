import * as React from 'react';
import { IMain } from '~lib';
import { Article } from './article';

type SectionProps = {
  content: IMain
};

export const Section = ({ content: { title, entries } }: SectionProps) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {entries.map((entry, index) => (
        <Article content={entry} key={index} />
      ))}
    </section>
  );
};

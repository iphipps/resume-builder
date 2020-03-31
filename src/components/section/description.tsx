import * as React from 'react';
import { IDescription } from '~lib';

type DescriptionProps = {
  content: IDescription
};

type EntriesProps = {
  entries: string[]
};

const Bullets = ({ entries }: EntriesProps) => {
  return (
    <ul>
      {entries.map((entry, index) => (
        <li key={index}>{entry}</li>
      ))}
    </ul>
  );
};

const Paragraphs = ({ entries }: EntriesProps) => {
  return (
    <>
      {entries.map((entry, index) => (
        <p key={index}>{entry}</p>
      ))}
    </>
  );
};

export const Description = ({
  content: { type, entries }
}: DescriptionProps) => {
  return type === 'bullets' ? (
    <Bullets entries={entries} />
  ) : (
    <Paragraphs entries={entries} />
  );
};

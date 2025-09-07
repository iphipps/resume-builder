import * as React from 'react';
import { IDescription, INestedDescription } from '~lib';

type DescriptionProps = {
  content: IDescription
};

type EntriesProps = {
  entries: (string | INestedDescription)[]
};

// Helper function to convert asterisks to bold tags
const formatText = (text: string) => {
  return text.split(/(\*[^*]+\*)/).map((part, index) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return <strong key={index}>{part.slice(1, -1)}</strong>;
    }
    return part;
  });
};

const Bullets = ({ entries }: EntriesProps) => {
  return (
    <ul>
      {entries.map((entry, index) => {
        if (typeof entry === 'string') {
          return (
            <li key={index}>{formatText(entry)}</li>
          );
        } else {
          // Handle nested description
          return (
            <li key={index}>
              {entry.title && <div style={{ fontWeight: 'bold', marginBottom: '0.2em' }}>{entry.title}</div>}
              <div>
                <Description content={entry.description} />
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

const Paragraphs = ({ entries }: EntriesProps) => {
  return (
    <>
      {entries.map((entry, index) => {
        if (typeof entry === 'string') {
          return (
            <p key={index}>{formatText(entry)}</p>
          );
        } else {
          // Handle nested description
          return (
            <div key={index}>
              {entry.title && <div style={{ fontWeight: 'bold', marginBottom: '0.2em' }}>{entry.title}</div>}
              <div>
                <Description content={entry.description} />
              </div>
            </div>
          );
        }
      })}
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

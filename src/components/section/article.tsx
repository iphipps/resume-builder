import * as React from 'react';
import { IMainEntries } from '~lib';
import { Description } from './description';

type ArticleProps = {
  content: IMainEntries
};

export const Article = ({
  content: { title, date, description }
}: ArticleProps) => {
  return (
    <article>
      {title && <h3>{title}</h3>}
      {date && <time>{date}</time>}
      <Description content={description} />
    </article>
  );
};

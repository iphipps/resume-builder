import * as React from 'react';
import { IMainEntries } from '~lib';
import { Description } from './description';
import styled from '@emotion/styled';

type ArticleProps = {
  content: IMainEntries
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;
export const Article = ({
  content: { title, date, description }
}: ArticleProps) => {
  return (
    <article>
      {title && (
        <Grid>
          <h3>{title}</h3>
          {date && <time>{date}</time>}
        </Grid>
      )}
      {description && <Description content={description} />}
    </article>
  );
};

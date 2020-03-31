import {css} from '@emotion/core';

export const styles = css`
  body {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 50.9374rem 1fr;
    font-family: 'Roboto', sans-serif;
    > div {
      grid-column-start: 2;
      width: 50.9375rem;
      height: 65.9375rem;
      overflow-y: hidden;
      box-shadow: inset 0 0 0.125rem red;
      @media print {
        box-shadow: none;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  quote,
  p,
  address {
    padding: 0;
    margin: 0;
  }
`;

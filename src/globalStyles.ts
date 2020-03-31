import {css} from '@emotion/core';

export const styles = css`
  body {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 50.9374rem 1fr;
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


`;

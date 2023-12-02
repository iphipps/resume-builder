import { css, SerializedStyles } from '@emotion/core';

export const sizes = {
  nil: 0,
  d3: 0.25,
  d2: 0.5,
  d1: 0.75,
  b: 1,
  u1: 1.25,
  u2: 1.5,
  u3: 2
};

export const fonts = {
  d3: css`
    font-size: 0.25rem;
    line-height: 1.5;
  `,
  d2: css`
    font-size: 0.5rem;
    line-height: 1.5;
  `,
  d1: css`
    font-size: 0.75rem;
    line-height: 1.5;
  `,
  b: css`
    font-size: 0.875rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  `,
  u1: css`
    font-size: 1rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    font-weight: 500;
  `,
  u2: css`
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0;
  `,
  u3: css`
    font-size: 2.125rem;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  `
};

type Dict = { [key: string]: SerializedStyles };

export const spacings = (() => {
  const obj: Dict = {};
  Object.keys(sizes).forEach((size: string) => {
    obj[`mt${size}`] = css`
      margin-top: ${sizes[size]}rem;
    `;
    obj[`mb${size}`] = css`
      margin-bottom: ${sizes[size]}rem;
    `;

    obj[`pt${size}`] = css`
      padding-top: ${sizes[size]}rem;
    `;
    obj[`pb${size}`] = css`
      padding-bottom: ${sizes[size]}rem;
    `;
  });
  return obj;
})();

export const styles = css`
  body {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 50.9374rem 1fr;
    font-family: 'Roboto', sans-serif;
    ${fonts.d1};
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
  .no-print {
    position: absolute;
    left: 12px;
    top: 12px;

  }
  @media print {
    .no-print {
      display: none;
    }
  }
  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: ${sizes.u1}rem;
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
  h1 {
    ${fonts.u2};
  }
  h2 {
    ${fonts.u1};
    ${spacings.mbd3}
  }
  h3,
  time {
    ${fonts.b};
    ${spacings.mbd3}
  }
  article {
    ${spacings.mbd2}
  }
  ${spacings}
  ${fonts}
`;

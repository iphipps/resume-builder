import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { resume } from './sample-resume';
import { Header } from './components/header';
import { Main } from './components/main';
import { Global } from '@emotion/core';
import { styles } from './globalStyles';

const { header, main } = resume;
ReactDOM.render(
  <>
    <Global styles={styles} />
    <Header content={header} />
    <Main content={main} />
  </>,
  document.getElementById('body')
);

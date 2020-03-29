import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { resume } from 'sample-resume';
import { Header } from './components/header';
import { Main } from './components/main';

ReactDOM.render(
  <>
    <Header content={resume.header} />
    <Main content={resume.main} />
  </>,
  document.getElementById('body')
);
